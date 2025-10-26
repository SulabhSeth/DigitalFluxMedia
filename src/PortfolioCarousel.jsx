import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from './Assets/12c45315-b374-4d36-9155-494fb136f435.png';
import img2 from './Assets/613179ac-f284-48f7-bb8c-35c31fdcb3e4.png';
import img3 from './Assets/6e362331-6d73-40de-a877-ebf4a5e3f3a9.png';
import img4 from './Assets/94a8124c-976d-4b39-b64b-0cfb562b1ee4.png';
import img5 from './Assets/c4490bd5-4b41-4899-9084-884ff6c76f05.png';


export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Portfolio images - replace with your actual work
  const portfolioItems = [
    {
      url: {img1},
      title: "AI Product Visualization",
      description: "Stunning 3D product renders for e-commerce"
    },
    {
      url: [img2],
      title: "Digital Art Creation",
      description: "Unique AI-generated artwork for brands"
    },
    {
      url: [img3],
      title: "Brand Identity Assets",
      description: "Complete visual identity systems"
    },
    {
      url: [img4],
      title: "Social Media Content",
      description: "Engaging visuals that drive engagement"
    },
    {
      url: [img5],
      title: "Video Ad Production",
      description: "High-converting video advertisements"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="relative z-10 container mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Main Carousel Container */}
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10">
          {/* Images */}
          <div className="relative w-full h-full">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 transform transition-all duration-700 delay-100">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 transform transition-all duration-700 delay-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / portfolioItems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-cyan-400 to-purple-400'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {isAutoPlaying ? '⏸ Pause' : '▶ Play'} Auto-scroll
          </button>
        </div>
      </div>
    </section>
  );
}