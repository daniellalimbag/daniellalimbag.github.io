import React, { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setVisible(true);
      const offsetX = 16;
      const offsetY = imgRef.current ? imgRef.current.height / 2 : 30;
      target.current = {
        x: e.clientX + offsetX,
        y: e.clientY - offsetY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const speed = 0.05;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * speed;
      current.current.y += (target.current.y - current.current.y) * speed;
      if (imgRef.current) {
        imgRef.current.style.left = `${current.current.x}px`;
        imgRef.current.style.top = `${current.current.y}px`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleError = () => setVisible(false);
  const handleLoad = () => setVisible(true);

  return (
    <img
      ref={imgRef}
      src="/bot.gif"
      alt="Bot Follower"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 0,
        width: 120,
        height: 120,
        left: 0,
        top: 0,
        display: visible ? 'block' : 'none',
      }}
      draggable={false}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};

export default CursorFollower;
