import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numCards, setNumCards] = useState(3);

  useEffect(() => {
    const callback = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  }, []);

  useEffect(() => {
    setNumCards(() => (screenWidth >= 900 ? 3 : screenWidth >= 600 ? 2 : 1));
  }, [screenWidth]);

  return { numCards };
}
