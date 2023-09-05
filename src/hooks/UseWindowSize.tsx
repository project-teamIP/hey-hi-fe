import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1080);

  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    setIsSmallScreen(newWindowWidth <= 1080);
    // setIsSmallScreen(newWindowWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth, isSmallScreen };
}

export default useWindowSize;
