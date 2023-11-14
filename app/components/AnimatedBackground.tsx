"use client";

import { useEffect, useState } from "react";

function AnimatedBackground() {
  const [containerHeight, setContainerHeight] = useState<any>(
    window.visualViewport?.height || window.innerHeight
  );
  //! Change viewport height
  useEffect(() => {
    const updateHeight = () => {
      const newHeight = window.visualViewport?.height || window.innerHeight;
      setContainerHeight(newHeight);

      // Change body's maximum height
      document.body.style.maxHeight = `${newHeight}px`;
    };

    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);
  return (
    <>
      <div
        className="background"
        style={{
          height: containerHeight,
          maxHeight: containerHeight,
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default AnimatedBackground;
