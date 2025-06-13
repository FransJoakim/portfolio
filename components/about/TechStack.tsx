import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/About.module.scss";

interface TechIconProps {
  name: string;
  src?: string;
  height?: number;
  width?: number;
  style?: {
    marginLeft?: string;
    marginRight?: string;
  };
}

const TechIcon = ({ name, src, height = 1, width = 1 }: TechIconProps) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [tooltipPos, setTooltipPos] = React.useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const rectSizeRef = React.useRef(40);

  if (!src) src = name.toLowerCase().replace(/ /g, "-");

  // useEffect(() => {
  //   if (ref.current) ref.current.style.visibility = "hidden";
  // }, [ref]);

  useEffect(() => {
    // Adjust the size of the icon based on the screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 800) {
        rectSizeRef.current = 40; // Small screens
      } else if (screenWidth < 1200) {
        rectSizeRef.current = 60; // Medium screens
      } else if (screenWidth < 1900) {
        rectSizeRef.current = 60; // Medium screens
      } else {
        rectSizeRef.current = 70; // Large screens
      }
    };
    handleResize(); // Initial call to set size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setTooltipPos({
      top: rect.top + window.scrollY - 40, // 40px above the icon
      left: rect.left + window.scrollX + rect.width / 2,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    // when the user scrolls, hide the tooltip by setting showTooltip to false
    const handleScroll = () => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showTooltip]);

  return (
    <div className="relative">
      <div className={styles.stackIcon}>
        <Image
          src={`/icons/${src}.png`}
          alt={name}
          height={rectSizeRef.current * height}
          width={rectSizeRef.current * width}
          style={{ objectFit: "contain" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showTooltip && typeof window !== "undefined"
          ? ReactDOM.createPortal(
              <div
                className={styles.altText}
                style={{
                  position: "absolute",
                  top: tooltipPos.top,
                  left: tooltipPos.left,
                  transform: "translate(-50%, 0%)",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                {name}
              </div>,
              document.body
            )
          : null}
      </div>
    </div>
  );
};

export const TechStack = () => {
  return (
    <div
      className={
        "hidden lg:grid px-3 py-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-6 w-full h-full mt-4 overflow-y-scroll " +
        styles.fadeScrollMask
      }
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
  );
};
