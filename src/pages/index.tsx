import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the Lemurian Guild, we meet Mondays from 7PM to 8:45PM."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <p>
            Welcome to the Lemurian Guild, we meet Mondays from 7PM to 8:45PM.
          </p>

          <p>
            At each session, you can choose to join a mission from the mission
            board selection. Most missions are self-contained, accomplishable
            within the time frame, and meant to be an enjoyable standalone
            experience. There are overarching plot threads connecting many of
            the missions for players who choose to look for them. Due to the
            fragmented nature of the missions, player collaboration and
            communication is crucial to understanding all that is going on in
            the shadows of Lemuria, particularly in fighting the mysterious
            group known as the Invictus Syndicate.
          </p>
        </div>
        <p className="container">
          <img src="img/Lobby.png" alt="lobby" />
        </p>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
