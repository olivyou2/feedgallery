import Feed from "./Feed/Feed";
import Gallery from "./Gallery/Gallery";

import styles from "../styles/Main.module.scss";
import { createRef, useEffect, useState } from "react";

export default function Main() {
  const mainWrapperRef = createRef();

  const [scrollY, setScrollY] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Components Count
  const scrollCount = 2;

  const wheelHandle = (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      setScrollIndex((prev) => Math.min(prev + 1, scrollCount - 1));
    } else {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Scroll Sense
  useEffect(() => {
    document.addEventListener("wheel", wheelHandle, { passive: false });

    return () => {
      document.removeEventListener("wheel", wheelHandle);
    };
  }, []);

  // Scroll Y Calculation
  useEffect(() => {
    let scroll = 0;

    const components = mainWrapperRef.current.children;
    for (let i = 0; i < scrollIndex; i += 1) {
      const component = components[i];

      scroll += component.offsetHeight;
    }
    setScrollY(scroll);
  }, [scrollIndex]);

  // Scroll Acceptance
  useEffect(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }, [scrollY]);

  return (
    <>
      <div className={styles.MainWrapper} ref={mainWrapperRef}>
        <Feed />
        <Gallery />
      </div>
    </>
  );
}
