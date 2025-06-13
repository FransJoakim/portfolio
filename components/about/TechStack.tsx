import React from "react";
import styles from "../../styles/About.module.scss";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import { SectionScrollPosition } from "../../lib/utils";
import { TechIcon } from "./TechIcon";

export const TechStack = () => {
  const techStackRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const clientWindowScrollY = useRecoilValue(clientWindowViewState);

  React.useEffect(() => {
    if (techStackRef.current && innerRef.current) {
      // The total scrollable range of the TechStack grid
      const techStackScrollableRange =
        innerRef.current.scrollHeight + 50 - techStackRef.current.clientHeight;

      // Ratio of how far the user has scrolled in the About section
      const scrollRatio =
        clientWindowScrollY / (SectionScrollPosition.AboutExit - 200);
      // Set TechStack scrollTop to match the same ratio
      techStackRef.current.scrollTop = scrollRatio * techStackScrollableRange;

      console.log("----------------------------------");
      // console.log("scrollY:", scrollY);
      console.log(
        "innerRef.current.scrollHeight:",
        innerRef.current.scrollHeight
      );
      console.log(
        "techStackRef.current.clientHeight:",
        techStackRef.current.clientHeight
      );
      console.log("techStackScrollableRange:", techStackScrollableRange);
      console.log("clientWindowScrollY:", clientWindowScrollY);
      console.log(
        "SectionScrollPosition.AboutExit:",
        SectionScrollPosition.AboutExit
      );
      console.log("scrollRatio:", scrollRatio);
      console.log(
        "scrollRatio * techStackScrollableRange:",
        scrollRatio * techStackScrollableRange
      );
    }
  }, [clientWindowScrollY]);

  return (
    <div
      ref={techStackRef}
      style={{ pointerEvents: "none", overflow: "hidden" }}
      className={styles.fadeScrollMask + " overflow-hidden"}
    >
      <div
        ref={innerRef}
        style={{ pointerEvents: "auto" }}
        className="hidden mt-10 pb-30 mb-40 lg:grid px-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-6 w-full h-full"
      >
        <TechIcon name="HTML" height={0.9} />
        <TechIcon name="CSS" height={0.9} />
        <TechIcon name="Typescript" width={0.8} />
        <TechIcon name="JavaScript" width={0.8} />
        <TechIcon name="Python" height={0.8} />
        <TechIcon name="PHP" />
        <TechIcon name="React" height={0.85} />
        <TechIcon name="NextJs" width={1.7} height={0.8} />
        <TechIcon name="Webpack" />
        <TechIcon name="Redux" width={1.5} height={1.5} />
        <TechIcon name="Jotai" height={1} />
        <TechIcon name="TailwindCSS" width={0.8} height={1.2} />
        <TechIcon name="Sass" width={0.9} />
        <TechIcon name="Bootstrap" width={0.9} />
        <TechIcon name="MUI" width={0.9} />
        <TechIcon name="Jest" height={0.7} />
        <TechIcon name="Playwright" height={0.7} />
        <TechIcon name="Cypress" height={0.7} />
        <TechIcon name="Mock Service Worker" />
        <TechIcon name="HTTP" />
        <TechIcon name="Rest API" />
        <TechIcon name="Swagger" />
        <TechIcon name="OpenId connect" />
        <TechIcon name="JWT" />
        <TechIcon name="GraphQL" />
        <TechIcon name="ExpressJs" />
        <TechIcon name="Gatsby Jamstack" />
        <TechIcon name="Socket.IO" width={0.75} />
        <TechIcon name="Elastic search" />
        <TechIcon name="GCP" width={1.5} />
        <TechIcon name="Kafka" />
        <TechIcon name="MongoDB" width={1.5} />
        <TechIcon name="Firebase" />
        <TechIcon name="SQL" height={0.8} />
        <TechIcon name="S3" />
        <TechIcon name="RDF" />
        <TechIcon name="OWL" />
        <TechIcon name="Git" height={0.8} />
        <TechIcon name="Github Actions" />
        <TechIcon name="Kubernetes" height={0.8} />
        <TechIcon name="Docker" width={1.5} />
        <TechIcon name="ArgoCD" />
        {/* <TechIcon name="Jira" />
      <TechIcon name="Confluence" /> */}
      </div>
    </div>
  );
};
