import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./Loader.scss";

const Loader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      ".loader-text",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );

    let counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => {
        setPercentage(Math.floor(counter.value));
      },
      onComplete: () => {
        document.body.style.overflow = "hidden";
        
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div className="mainLoaderContainer">
      <div className="insidecontainer">
        <p className="loader-text">{percentage}%</p>
      </div>
    </div>
  );
};

export default Loader;


