import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-soft-orange animate-pulse-soft"></div>
        <svg 
          className="absolute top-1/3 right-1/3 w-96 h-96 text-neutral-gray opacity-10 animate-spin-slow" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 5 L50 95 M5 50 L95 50 M20 20 L80 80 M20 80 L80 20" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center z-10">
        {/* Image Column */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float">
            <img 
              src="/lovable-uploads/d167e14b-98f3-42ec-8dbd-c3fe732316ad.png" 
              alt="Divya Agarwal" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="block">Divya Agarwal</span>
            <span className="text-teal">Product & Operations Analyst</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-gray mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Driving customer-centric solutions with data & agility
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToProjects}
              className="bg-teal hover:bg-teal/90 text-white font-medium flex items-center gap-2 group"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3">
              <a 
                href="mailto:divyaagarwal@example.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-soft-peach hover:bg-soft-orange transition-colors"
              >
                <Mail className="w-5 h-5 text-dark-gray" />
              </a>
              <a 
                href="https://linkedin.com/in/divya-agarwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-soft-peach hover:bg-soft-orange transition-colors"
              >
                <Linkedin className="w-5 h-5 text-dark-gray" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-neutral-gray hover:text-teal"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}
