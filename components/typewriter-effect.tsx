// src/components/typewriter-effect.tsx
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
}

export const TypewriterEffect = ({
  text,
  speed = 100,
}: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length === text.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
          return prev;
        }
        return text.slice(0, prev.length + 1);
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // Efecto para el parpadeo del cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p className="font-mono text-7xl">
      {displayedText}
      <span
        className="border-l-2 border-current"
        style={{
          opacity: showCursor ? 1 : 0,
          height: "1em",
          display: "inline-block",
          verticalAlign: "text-top",
          marginLeft: "14px",
        }}
      />
    </p>
  );
};
