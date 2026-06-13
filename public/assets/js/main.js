(function () {
  // Only run when the user hasn't requested reduced motion
  const mq = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!mq.matches) return;

  // Guard: IntersectionObserver may be absent in legacy environments
  if (typeof IntersectionObserver === 'undefined') return;

  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
