import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}) => {
  const [curr, setCurr] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!slides?.length) return;

    const calculateContainerHeight = () => {
      const firstImage = new Image();
      firstImage.src = slides[0];
      firstImage.onload = () => {
        const aspectRatio = firstImage.width / firstImage.height;
        const maxWidth = 550;
        const calculatedHeight = Math.min(
          window.innerWidth / aspectRatio,
          maxWidth
        );
        setContainerHeight(calculatedHeight);
      };
    };

    calculateContainerHeight();
    window.addEventListener("resize", calculateContainerHeight);

    return () => {
      window.removeEventListener("resize", calculateContainerHeight);
    };
  }, [slides]);

  return (
    <>
      <style jsx>{`
        .carousel {
          overflow: hidden;
          position: relative;
          height: ${containerHeight}px;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-out;
        }

        .carousel-image {
          flex: 0 0 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div
        className="carousel rounded-xl"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.85), 0 0 10px rgba(0,0,0,0.7)",
          background: "rgba(10,10,10,0.4)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          className="carousel-inner w-full h-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((img, index) => (
            <img key={index} src={img} alt="" className="carousel-image" />
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prev}
            style={{
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 12px rgba(0,0,0,0.8)",
              color: "white",
            }}
            className="p-2 rounded-full hover:bg-black transition"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={next}
            style={{
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 12px rgba(0,0,0,0.8)",
              color: "white",
            }}
            className="p-2 rounded-full hover:bg-black transition"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  background:
                    curr === i
                      ? "white"
                      : "rgba(255,255,255,0.25)",
                }}
                className="transition-all w-2.5 h-2.5 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;