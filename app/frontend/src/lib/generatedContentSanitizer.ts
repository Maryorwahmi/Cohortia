import DOMPurify from "dompurify";

const MAX_GENERATED_MARKUP_LENGTH = 250_000;

const HTML_TAGS = [
  "article", "b", "blockquote", "br", "caption", "code", "dd", "div", "dl", "dt",
  "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "hr", "i", "li", "main",
  "ol", "p", "pre", "section", "small", "span", "strong", "sub", "sup", "table",
  "tbody", "td", "th", "thead", "tr", "ul",
  "svg", "circle", "ellipse", "g", "line", "path", "polygon", "polyline", "rect",
  "text", "tspan",
];

const HTML_ATTRIBUTES = [
  "alt", "aria-hidden", "aria-label", "class", "colspan", "fill", "height", "role",
  "rowspan", "scope", "stroke", "stroke-linecap", "stroke-linejoin", "stroke-width",
  "title", "viewBox", "width", "x", "x1", "x2", "y", "y1", "y2", "cx", "cy", "r",
  "rx", "ry", "d", "points", "transform", "opacity", "fill-opacity", "stroke-opacity",
];

const SVG_TAGS = [
  "svg", "circle", "ellipse", "g", "line", "path", "polygon", "polyline", "rect",
  "text", "tspan",
];

const SVG_ATTRIBUTES = [
  "aria-label", "cx", "cy", "d", "fill", "fill-opacity", "height", "opacity",
  "points", "preserveAspectRatio", "r", "role", "rx", "ry", "stroke",
  "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
  "stroke-opacity", "stroke-width", "transform", "viewBox", "width", "x", "x1",
  "x2", "y", "y1", "y2",
];

const SAFE_PAINT = /^(?:none|currentcolor|transparent|[a-z]{1,20}|#[\da-f]{3,8}|rgba?\([\d\s.,%+-]+\)|hsla?\([\d\s.,%+-]+\))$/i;

export const GENERATED_CONTENT_CSP =
  "default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";

function sanitizePaintAttributes(root: Element) {
  for (const element of [root, ...Array.from(root.querySelectorAll("*"))]) {
    for (const attribute of ["fill", "stroke"]) {
      const value = element.getAttribute(attribute);
      if (value && !SAFE_PAINT.test(value.trim())) element.removeAttribute(attribute);
    }
  }
}

export function sanitizeGeneratedHtml(markup: unknown): string {
  if (typeof markup !== "string" || !markup || markup.length > MAX_GENERATED_MARKUP_LENGTH) return "";
  const sanitized = String(DOMPurify.sanitize(markup, {
    ALLOWED_TAGS: HTML_TAGS,
    ALLOWED_ATTR: HTML_ATTRIBUTES,
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form", "foreignObject", "use", "image"],
    FORBID_ATTR: ["style", "href", "src", "srcset", "srcdoc", "action", "formaction", "xlink:href"],
    RETURN_TRUSTED_TYPE: false,
  }));
  const document = new DOMParser().parseFromString(sanitized, "text/html");
  document.querySelectorAll("svg").forEach(sanitizePaintAttributes);
  return document.body.innerHTML;
}

export function sanitizeGeneratedSvg(markup: unknown): string {
  if (typeof markup !== "string" || !markup || markup.length > MAX_GENERATED_MARKUP_LENGTH) return "";
  const sanitized = String(DOMPurify.sanitize(markup, {
    ALLOWED_TAGS: SVG_TAGS,
    ALLOWED_ATTR: SVG_ATTRIBUTES,
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ["script", "style", "foreignObject", "use", "image", "animate", "set"],
    FORBID_ATTR: ["style", "href", "xlink:href"],
    RETURN_TRUSTED_TYPE: false,
  }));
  const document = new DOMParser().parseFromString(sanitized, "image/svg+xml");
  const root = document.documentElement;
  if (document.querySelector("parsererror") || root.localName !== "svg") return "";
  sanitizePaintAttributes(root);
  root.setAttribute("width", "100%");
  root.setAttribute("height", "100%");
  return new XMLSerializer().serializeToString(root);
}
