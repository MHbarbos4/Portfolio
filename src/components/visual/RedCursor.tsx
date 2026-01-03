import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const RedCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const enable = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.add("lt-custom-cursor");
      }
    };

    enable();
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", enable);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", enable);
      document.body.classList.remove("lt-custom-cursor");
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden h-5 w-5 rounded-full bg-primary/70 shadow-[0_0_25px_hsl(var(--glow-red))] mix-blend-screen md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
    />
  );
};
