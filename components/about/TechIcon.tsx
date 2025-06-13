import Image from "next/image";
import React, { useEffect } from "react";
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

export const TechIcon = ({
  name,
  src,
  height = 1,
  width = 1,
}: TechIconProps) => {
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
