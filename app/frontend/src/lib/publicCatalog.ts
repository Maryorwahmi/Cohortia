import type {CatalogCoursesResponse} from "../services/api";

let catalogPromise: Promise<CatalogCoursesResponse | null> | null = null;

export function loadStaticCatalog(): Promise<CatalogCoursesResponse | null> {
  if (!catalogPromise) {
    catalogPromise = fetch("/content/catalog-courses.json", {
      headers: {Accept: "application/json"},
      cache: "force-cache",
    }).then(async (response) => {
      if (!response.ok) return null;
      return await response.json() as CatalogCoursesResponse;
    }).catch(() => null);
  }
  return catalogPromise;
}
