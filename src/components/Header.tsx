
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
          <span className="text-teal">D</span>ivya
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'skills', 'projects', 'experience'].map((item) => (
              <li key={item}>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection(item)}
                  className="font-lato hover:text-teal transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <a href="mailto:divyaagarwal@example.com" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Mail className="w-5 h-5 text-teal" />
          </a>
          <a href="https://linkedin.com/in/divya-agarwal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Linkedin className="w-5 h-5 text-teal" />
          </a>
        </div>
      </div>
    </header>
  );
}
