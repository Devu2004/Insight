import React, { useState, useCallback } from "react";
import Loader from "./components/Loader";
import MainRoutes from "./routes/MainRoutes";
import { gsap } from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showRoutes, setShowRoutes] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    gsap.to(".mainLoaderContainer", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        setLoading(false);
        setShowRoutes(true);

        gsap.fromTo(
          ".app-content",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      },
    });
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      {showRoutes && <div className="app-content"><MainRoutes /></div>}
    </>
  );
};

export default App;

