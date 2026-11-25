import Link from "next/link";
import styles from "./page.module.css";

const projectURL = "https://github.com/kvivek0591/sopforagents";
const kl4aURL = "https://github.com/CogniSwitch/KL4A";

const steps = [
  {
    title: "Build from public sources",
    description:
      "Transform SOPs, policies, and guidelines into knowledge with links back to the source evidence.",
  },
  {
    title: "Review and make it yours",
    description:
      "Inspect the bundle, record review decisions, and extend it with your organization’s procedures.",
  },
  {
    title: "Connect it to your agents",
    description:
      "Download a versioned bundle and make it available to your agents through KL4A MCP.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="SoPforAgents home">
          <span className={styles.mark} aria-hidden="true">S</span>
          SoPforAgents<span className={styles.domain}>.com</span>
        </Link>
        <span className={styles.buildStatus}>
          <span aria-hidden="true" />Building in public
        </span>
      </header>

      <main id="main" className={styles.main}>
        <section className={styles.hero} aria-labelledby="project-title">
          <p className={styles.eyebrow}>Operating knowledge for AI agents</p>
          <h1 id="project-title">SOPs your agents <br />can work with.</h1>
          <p className={styles.lede}>
            We’re building a public library of source-backed knowledge bundles
            from SOPs, policies, and guidelines. Review a bundle, add your own
            procedures, and connect it to your agents through KL4A MCP.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryLink} href={projectURL}>
              Follow the build <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondaryLink} href={kl4aURL}>
              Explore KL4A <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className={styles.availability}>
            In development. No knowledge bundles are available to download yet.
          </p>
        </section>

        <div className={styles.details}>
          <section className={styles.focus} aria-labelledby="focus-title">
            <p className={styles.eyebrow}>Our first healthcare focus</p>
            <h2 id="focus-title">Prior authorization. <br />Across US insurers.</h2>
            <p>
              We’re starting with prior authorization across leading US health
              insurers. We’re selecting policy sources and reviewing reuse
              rights before publishing the first knowledge bundle.
            </p>
            <dl className={styles.scope}>
              <div><dt>Domain</dt><dd>US healthcare operations</dd></div>
              <div><dt>Source material</dt><dd>Insurer policies under review</dd></div>
              <div><dt>First bundle</dt><dd>In preparation</dd></div>
            </dl>
            <p className={styles.scopeNote}>
              Source requirements and organization-approved procedures will
              carry distinct provenance and review status.
            </p>
          </section>

          <section className={styles.workflow} aria-labelledby="workflow-title">
            <p className={styles.eyebrow}>What we’re building</p>
            <h2 id="workflow-title">From policy to agent context.</h2>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className={styles.publicBuild} aria-labelledby="public-title">
          <div>
            <h2 id="public-title">One bundle at a time. Out in the open.</h2>
            <p>
              We’ll share the sources, extraction results, corrections, review
              status, and version changes as the library grows. Each bundle
              will make its scope and limits clear.
            </p>
          </div>
          <a href={projectURL}>Follow or contribute on GitHub <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Built in public with <a href={kl4aURL}>KL4A</a>.</p>
        <a href="/llms.txt">Project brief for agents <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
