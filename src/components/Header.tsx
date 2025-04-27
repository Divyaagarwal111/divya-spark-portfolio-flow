
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Mail, Linkedin } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold">
          <span className="text-purple-500">D</span>ivya
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'skills', 'projects', 'what-i-do'].map((item) => (
              <li key={item}>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection(item)}
                  className="font-lato hover:text-purple-500 transition-colors"
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <a href="mailto:agarwaldivya705@gmail.com" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
            <Mail className="w-5 h-5 text-purple-500" />
          </a>
          <a href="https://www.linkedin.com/in/divyabizintel/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
            <Linkedin className="w-5 h-5 text-purple-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
