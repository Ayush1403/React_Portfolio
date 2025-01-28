import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768); // Check if screen is medium or larger

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Skip event listeners for small screens

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return; // Skip hover effect for small screens

    const elements = document.querySelectorAll(".hover-target");
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  const cursorVariants = {
    default: {
      x: position.x - 32,
      y: position.y - 32,
      width: "64px",
      height: "64px",
      mixBlendMode: "normal",
    },
    hovered: {
      x: position.x - 128,
      y: position.y - 128,
      width: "256px",
      height: "256px",
      mixBlendMode: "difference", // Apply the negative effect
    },
  };

  if (!isVisible) return null; // Don't render the cursor on small screens

  return (
    <motion.div
      className="custom-cursor"
      variants={cursorVariants}
      animate={hovered ? "hovered" : "default"}
      transition={{ type: "spring", stiffness: 1000, damping: 30 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
        borderRadius: "70%",
        backgroundColor: "white", // Change this to match your theme
      }}
    />
  );
};

export default CustomCursor;
