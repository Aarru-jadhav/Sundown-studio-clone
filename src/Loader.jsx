import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [textIndex, setTextIndex] = useState(0);
  const messages = ["Envioroment", "Experiencess", "Content"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Slight delay before showing main content
        }
        return prev + 1;
      });
    }, 1000); // Change text every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <h1 className="loader-text">{messages[textIndex]}</h1>
    </div>
  );
};

export default Loader;
