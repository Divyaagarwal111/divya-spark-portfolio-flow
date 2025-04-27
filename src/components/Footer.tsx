
import React from 'react';
import { Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-playfair text-3xl font-bold mb-2">Divya Agarwal</h2>
            <p className="text-neutral-gray">Product & Operations Analyst</p>
          </div>
          
          <div className="flex justify-center mb-8 space-x-6">
            <a 
              href="mailto:divyaagarwal@example.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-teal/70 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/divya-agarwal"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-teal/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://notion.portfolio.example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-teal/70 transition-colors"
              aria-label="Portfolio"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 relative animate-float" style={{ animationDuration: '4s' }}>
              <img 
                src="https://em-content.zobj.net/source/apple/325/panda_1f43c.png" 
                alt="Panda emoji" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="mt-8 text-sm text-neutral-gray">
            <p>&copy; {new Date().getFullYear()} Divya Agarwal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
