import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const InfrastructureSlider = () => {
  const { t } = useSiteContent();
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleGlobalMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="infrastructure" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("infra.eyebrow")}</span>
            <h2 className="section-title mt-3">{t("infra.title")}</h2>
            <p className="section-subtitle mt-4">{t("infra.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-4xl select-none overflow-hidden rounded-3xl border border-border/60 shadow-xl"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* After Image (STEM / Robotics Lab) */}
            <img
              src={gallery6}
              alt="After campus upgrade"
              className="absolute inset-0 h-full w-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 right-6 rounded-xl bg-primary/95 px-4 py-2 text-xs font-bold text-white shadow-glow backdrop-blur-md">
              {t("infra.label.after")}
            </div>

            {/* Before Image (Traditional Library/Lab) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={gallery2}
                alt="Before campus upgrade"
                className="absolute inset-0 h-full object-cover"
                style={{ width: containerRef.current?.getBoundingClientRect().width ?? "100%", maxWidth: "none" }}
                draggable="false"
              />
              <div className="absolute top-4 left-6 rounded-xl bg-destructive/95 px-4 py-2 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                {t("infra.label.before")}
              </div>
            </div>

            {/* Separator Line */}
            <div
              className="absolute inset-y-0 w-1 cursor-ew-resize bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-between rounded-full bg-white px-2.5 shadow-hover ring-4 ring-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="block h-3.5 w-0.5 rounded-full bg-primary/70" />
                <span className="block h-3.5 w-0.5 rounded-full bg-primary/70" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InfrastructureSlider;
