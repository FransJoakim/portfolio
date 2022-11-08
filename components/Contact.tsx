import { useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { clientWindowViewState } from "../pages";

const Contact = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollEntryHeight = 1200;

    if (clientWindowView < scrollEntryHeight && sectionRef.current) {
      sectionRef.current.style.opacity = "0";
    }

    if (clientWindowView > scrollEntryHeight && sectionRef.current) {
      const opacity = 0 + (clientWindowView - scrollEntryHeight) / 200;
      sectionRef.current.style.opacity = opacity.toString();
    }
  }, [clientWindowView]);

  return (
    <section
      ref={sectionRef}
      className="fixed h-full flex items-center opacity-0"
    >
      <div className="h-1/2">
        <h1 id="contact" className="text-9xl">
          Contact
        </h1>
      </div>
    </section>
  );
};

export default Contact;
