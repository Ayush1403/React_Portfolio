import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Add hover effect to elements with "hover-target" class
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
  }, []);

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
