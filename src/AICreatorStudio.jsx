import React, { useState, useEffect } from 'react';
import { Sparkles, Video, Image, Zap, ArrowRight, Mail, Phone, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AICreatorStudio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Sample images for carousel - replace with your actual work
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      title: "Product Visualization"
    },
    {
      url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      title: "AI Generated Art"
    },
    {
      url: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=600&fit=crop",
      title: "Brand Assets"
    },
    {
      url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
      title: "Social Media Graphics"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Ad Videos",
      description: "Transform your brand message into captivating video ads that drive conversions and engage audiences across all platforms.",
      features: ["Script to Video", "Voice Synthesis", "Auto-Editing"]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "AI Visuals",
      description: "Generate stunning, unique visuals tailored to your brand identity using cutting-edge AI technology.",
      features: ["Product Renders", "Brand Assets", "Social Media Graphics"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative Concepts",
      description: "Ideate and visualize creative concepts at lightning speed with our AI-powered ideation tools.",
      features: ["Mood Boards", "Style Exploration", "Rapid Prototyping"]
    }
  ];

  const portfolio = [
    { type: "Video Ad", client: "Tech Startup", result: "300% CTR Increase" },
    { type: "Visual Campaign", client: "Fashion Brand", result: "2M+ Impressions" },
    { type: "Product Launch", client: "E-commerce", result: "150% Sales Boost" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Digital Flux Media
          </span>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Create Stunning
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Visuals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your brand with cutting-edge AI technology. We craft mesmerizing ad videos and visuals that captivate audiences and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105">
              <span>View Our Work</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveService(idx)}
              className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer ${
                activeService === idx ? 'bg-white/10 border-cyan-400/50' : ''
              }`}
            >
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              {/* Image Carousel for AI Visuals */}
              {idx === 1 && (
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={portfolioImages[currentImageIndex].url}
                    alt={portfolioImages[currentImageIndex].title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-sm font-semibold">{portfolioImages[currentImageIndex].title}</p>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {portfolioImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentImageIndex ? 'bg-cyan-400 w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-cyan-300">
                    <CheckCircle className="w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Results</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-cyan-400 font-semibold mb-2">{item.type}</div>
              <div className="text-xl font-bold mb-2">{item.client}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {item.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { step: "01", title: "Consultation", desc: "We understand your vision, goals, and target audience" },
            { step: "02", title: "AI Creation", desc: "Our advanced AI systems generate multiple creative options" },
            { step: "03", title: "Refinement", desc: "We perfect every detail based on your feedback" },
            { step: "04", title: "Delivery", desc: "Receive production-ready assets optimized for all platforms" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-6 group">
              <div className="text-6xl font-bold text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Magic?</h2>
          <p className="text-xl mb-8 opacity-90">Let's bring your vision to life with the power of AI</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-full">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@digitalfluxmedia.com" className="hover:text-cyan-200 transition-colors">contact@digitalfluxmedia.com</a>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-full">
              <Phone className="w-5 h-5" />
              <a href="tel:+1234567890" className="hover:text-cyan-200 transition-colors">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-12 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2024 Digital Flux Media. Transforming brands with artificial intelligence.</p>
      </footer>
    </div>
  );
}