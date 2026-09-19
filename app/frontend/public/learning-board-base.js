/* Cohortia learning board base helpers — injected into every HTML fragment iframe */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.cohortia = window.cohortia || {};

  /**
   * Run a GSAP entrance animation with reduced-motion safety.
   * @param {string} selector - CSS selector for targets
   * @param {object} opts - GSAP from/to vars
   */
  window.cohortia.entrance = function (selector, opts) {
    if (reducedMotion || typeof gsap === 'undefined') return;
    const defaults = { opacity: 0, duration: 0.6, ease: 'power2.out' };
    gsap.from(selector, Object.assign(defaults, opts));
  };

  /**
   * Staggered entrance for a set of elements.
   */
  window.cohortia.stagger = function (selector, opts) {
    if (reducedMotion || typeof gsap === 'undefined') return;
    const defaults = { opacity: 0, y: 18, duration: 0.55, stagger: 0.08, ease: 'power2.out' };
    gsap.from(selector, Object.assign(defaults, opts));
  };

  /**
   * Load a Lottie animation safely.
   * @param {string|Element} container - selector or DOM element
   * @param {string} url - public Lottie JSON URL
   * @param {object} opts - optional lottie-web options
   */
  window.cohortia.lottie = function (container, url, opts) {
    if (typeof lottie === 'undefined') return null;
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return null;
    const defaults = { container: el, renderer: 'svg', loop: true, autoplay: true, path: url };
    return lottie.loadAnimation(Object.assign(defaults, opts));
  };

  /**
   * Pulse an element softly (looping).
   */
  window.cohortia.pulse = function (selector, opts) {
    if (reducedMotion || typeof gsap === 'undefined') return;
    const defaults = { scale: 1.04, duration: 1.8, yoyo: true, repeat: -1, ease: 'sine.inOut' };
    gsap.to(selector, Object.assign(defaults, opts));
  };
})();
