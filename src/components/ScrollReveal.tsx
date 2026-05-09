import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const transforms = {
    up: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    left: isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    right: isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${transforms[direction]} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
