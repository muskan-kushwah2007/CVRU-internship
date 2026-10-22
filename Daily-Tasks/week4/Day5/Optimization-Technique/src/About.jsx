
export default function About() {
  console.log("About page loaded!");

  return (
    <section className="about-card">
      <span className="eyebrow">ON-DEMAND COMPONENT</span>
      <h2>About This Project</h2>
      <p>
        This project demonstrates React rendering behavior,
        React.memo, useCallback, useMemo, lazy loading,
        and code splitting.
      </p>
      <p>
        React.lazy loads this component through a dynamic import,
        while Suspense displays a fallback during loading.
      </p>
    </section>
  );
}

