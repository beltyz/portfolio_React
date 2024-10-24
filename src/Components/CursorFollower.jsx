import React, { useState, useEffect } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="follower"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CursorFollower;
