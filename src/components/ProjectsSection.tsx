
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  results?: string[];
  tools: string[];
  demoLink: string;
  pdfLink: string;
  hasPrototype?: boolean;
  category: 'product-improvement' | 'product-design';
}

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState<{
    'product-improvement': boolean;
    'product-design': boolean;
  }>({
    'product-improvement': false,
    'product-design': false,
  });
  
  const projects: Project[] = [
    {
      id: 1,
      name: "Swiggy Pre-Ordering Feature",
      description: "Led the development of a pre-ordering system allowing customers to place orders up to 2 days in advance",
      image: "/project-swiggy.jpg",
      tools: [],
      demoLink: "https://swiggyprototype.netlify.app/",
      pdfLink: "#",
      hasPrototype: true,
      category: 'product-improvement'
    },
    {
      id: 2,
      name: "FleetMaster Dashboard",
      description: "Designed and deployed a comprehensive fleet management system for delivery operations",
      image: "/project-fleet.jpg",
      tools: [],
      demoLink: "#",
      pdfLink: "https://ljcgevwbfyvbbzpdsnri.supabase.co/storage/v1/object/sign/portfolio.pdfs/Launch%20of%20Fleetmaster.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZWI3ZTYyLTFhMDgtNDk0ZS1hOGVkLTYxODk3YTY3YmI2OCJ9.eyJ1cmwiOiJwb3J0Zm9saW8ucGRmcy9MYXVuY2ggb2YgRmxlZXRtYXN0ZXIucGRmIiwiaWF0IjoxNzQ1ODIwODI1LCJleHAiOjE3NzczNTY4MjV9.P6ZUo9pw8jtCQXSQfuTl3IONC3RuMOQtCxFTwKb4F8M",
      category: 'product-improvement'
    },
    {
      id: 3,
      name: "Improving Instagram Reels",
      description: "Redesigned Instagram Reels experience to improve user engagement and content discoverability",
      image: "/project-instagram.jpg",
      tools: [],
      demoLink: "#",
      pdfLink: "https://ljcgevwbfyvbbzpdsnri.supabase.co/storage/v1/object/sign/portfolio.pdfs/How%20to%20Improve%20Instagram%20Reels.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZWI3ZTYyLTFhMDgtNDk0ZS1hOGVkLTYxODk3YTY3YmI2OCJ9.eyJ1cmwiOiJwb3J0Zm9saW8ucGRmcy9Ib3cgdG8gSW1wcm92ZSBJbnN0YWdyYW0gUmVlbHMucGRmIiwiaWF0IjoxNzQ2MDIwNzc3LCJleHAiOjE3Nzc1NTY3Nzd9.tn0HQmw56jFyoK9Dlj2KvodYths2BxLzQNpHzm6wKj8",
      category: 'product-improvement'
    },
    {
      id: 4,
      name: "Improving CRED's Reward/Coupon Redemption Rate",
      description: "Enhanced the CRED reward system to improve coupon redemption rates and user retention",
      image: "/project-cred.jpg",
      tools: [],
      demoLink: "#",
      pdfLink: "https://ljcgevwbfyvbbzpdsnri.supabase.co/storage/v1/object/sign/portfolio.pdfs/CRED%20Capstone%20Project_Group%202_C17_V2_%20Updated-compressed.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZWI3ZTYyLTFhMDgtNDk0ZS1hOGVkLTYxODk3YTY3YmI2OCJ9.eyJ1cmwiOiJwb3J0Zm9saW8ucGRmcy9DUkVEIENhcHN0b25lIFByb2plY3RfR3JvdXAgMl9DMTdfVjJfIFVwZGF0ZWQtY29tcHJlc3NlZC5wZGYiLCJpYXQiOjE3NDYwMjAxMzcsImV4cCI6MTc3NzU1NjEzN30.lA9HiUuVhOIL4XUuvuRuHHAiPqvtZARPmBCanKAzOsw",
      category: 'product-improvement'
    },
    {
      id: 5,
      name: "ParkEase - Parking Solution",
      description: "Designed a user-friendly parking app to help drivers find and pay for parking spaces more efficiently",
      image: "/project-parkease.jpg",
      tools: [],
      demoLink: "https://parkease-motion-story.lovable.app/",
      pdfLink: "https://ljcgevwbfyvbbzpdsnri.supabase.co/storage/v1/object/sign/portfolio.pdfs/ParkEase.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZWI3ZTYyLTFhMDgtNDk0ZS1hOGVkLTYxODk3YTY3YmI2OCJ9.eyJ1cmwiOiJwb3J0Zm9saW8ucGRmcy9QYXJrRWFzZS5wZGYiLCJpYXQiOjE3NDYxNzMzNjgsImV4cCI6MTc3NzcwOTM2OH0.sEiMNdcIDNtMtD116qjxeAT29BGq0t0fT3BboYdi3Rs",
      hasPrototype: true,
      category: 'product-design'
    }
  ];

  const toggleCard = (id: number) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };

  const toggleShowProjects = (category: 'product-improvement' | 'product-design') => {
    setShowProjects(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const productImprovementProjects = projects.filter(project => project.category === 'product-improvement');
  const productDesignProjects = projects.filter(project => project.category === 'product-design');

  const renderProjects = (projects: Project[], shouldShow: boolean) => {
    if (!shouldShow) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-8">
        {projects.map((project) => (
          <div key={project.id} className="h-[400px]">
            <div className={`flip-card ${flippedCard === project.id ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-400 relative">
                    <img 
                      src={`https://source.unsplash.com/random/800x600/?${project.name.split(' ')[0].toLowerCase()}`}
                      alt={project.name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold text-center px-4 drop-shadow-md">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="mb-6 text-neutral-gray">{project.description}</p>
                    
                    <Button 
                      onClick={() => toggleCard(project.id)}
                      className="w-full bg-purple-500 hover:bg-purple-600"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button 
                      onClick={() => toggleCard(project.id)}
                      variant="outline"
                      className="flex-1 text-purple-700 border-purple-300 hover:bg-purple-100 bg-purple-500 text-white hover:text-purple-700"
                    >
                      Back
                    </Button>
                    
                    {project.hasPrototype && (
                      <Button 
                        asChild
                        className="flex-1 bg-purple-500 hover:bg-purple-600 gap-1"
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          View Prototype <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    
                    <Button 
                      asChild
                      className="flex-1 bg-purple-500 text-white hover:bg-purple-600 gap-1"
                    >
                      <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                        Download {project.category === 'product-design' ? 'Case Study' : 'PDF'} <FileText className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCategorySection = (
    title: string, 
    projects: Project[], 
    category: 'product-improvement' | 'product-design',
    color: string
  ) => (
    <div className="mb-16">
      <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${color} pb-2 relative inline-block`}>
        {title}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 rounded-full"></div>
      </h3>
      
      <div className="flex justify-center">
        <Button 
          onClick={() => toggleShowProjects(category)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 gap-2 rounded-full px-8"
        >
          {showProjects[category] ? 'Hide Projects' : 'View Projects'} <ChevronRight className={`h-4 w-4 transform transition-transform ${showProjects[category] ? 'rotate-90' : ''}`} />
        </Button>
      </div>

      {renderProjects(projects, showProjects[category])}
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block text-white">
          Featured Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-28 bg-purple-500 rounded-full"></div>
        </h2>
        
        {renderCategorySection(
          "Product Improvement Projects", 
          productImprovementProjects, 
          'product-improvement',
          "text-pink-400"
        )}
        
        {renderCategorySection(
          "Product Design Projects", 
          productDesignProjects, 
          'product-design',
          "text-purple-400"
        )}
      </div>
    </section>
  );
}
