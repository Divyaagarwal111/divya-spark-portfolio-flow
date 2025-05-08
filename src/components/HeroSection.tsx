
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react';

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const titles = ["Product Analyst", "Operations Analyst", "Program Analyst"];
  
  useEffect(() => {
    // Set loaded state for triggering entrance animations
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-dark-gray text-white">
      {/* Enhanced Background Elements with more animations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400 animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-300 animate-pulse-soft delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-blue-300 animate-pulse-soft delay-500"></div>
        <svg 
          className="absolute top-1/3 right-1/3 w-96 h-96 text-purple-500 opacity-10 animate-spin-slow" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 5 L50 95 M5 50 L95 50 M20 20 L80 80 M20 80 L80 20" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
        </svg>
        <svg 
          className="absolute bottom-1/3 left-1/2 w-72 h-72 text-pink-500 opacity-5 animate-spin-slow animate-reverse" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
          <path d="M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center z-10">
        {/* Image Column with enhanced animations */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
          <div 
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-6 transform transition-all duration-1000 ${
              isLoaded ? "scale-100 rotate-0 animate-float" : "scale-95 rotate-12 opacity-0"
            }`}
          >
            <img 
              src="/lovable-uploads/d167e14b-98f3-42ec-8dbd-c3fe732316ad.png" 
              alt="Divya Agarwal" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            
            {/* Animated border effect */}
            <div className="absolute inset-0 border-4 border-purple-500/50 rounded-full animate-pulse-soft"></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full filter blur-md animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Content Column with enhanced animations */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Divya Agarwal</span>
            <div className="flex items-center">
              <span className="text-pink-300 mr-2">I am</span>
              <div className="h-16 inline-block min-w-[220px]">
                <div className="relative">
                  {titles.map((title, index) => (
                    <span
                      key={index}
                      className={`absolute left-0 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 ${
                        titleIndex === index 
                          ? "opacity-100 transform-none" 
                          : "opacity-0 -translate-y-4"
                      }`}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </h1>
          
          {/* Added more margin-top (mt-24 instead of mt-10) to create more space between title and description */}
          <p 
            className={`text-lg md:text-xl text-neutral-gray mb-8 max-w-lg mt-24 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Driving customer-centric solutions with data & agility
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-3">
              <a 
                href="mailto:agarwaldivya705@gmail.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Mail className="w-5 h-5 text-purple-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/divyabizintel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Linkedin className="w-5 h-5 text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Button 
          variant="ghost" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-neutral-gray hover:text-purple-500 transition-colors group"
        >
          <span className="mb-2 text-sm transition-all group-hover:-translate-y-1 duration-300">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce transition-all group-hover:translate-y-1 duration-300" />
          <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 bg-purple-500/20 filter blur-md transition-opacity duration-300"></div>
        </Button>
      </div>
    </section>
  );
}
