
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  results: string[];
  tools: string[];
  demoLink: string;
}

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      name: "Swiggy Pre-Ordering Feature",
      description: "Led the development of a pre-ordering system allowing customers to place orders up to 2 days in advance",
      image: "/project-swiggy.jpg", // Placeholder
      results: [
        "Improved customer satisfaction by 23%",
        "Increased restaurant partner revenue by 15%",
        "Reduced order cancellations by 12%"
      ],
      tools: ["Figma", "SQL", "A/B Testing", "User Research"],
      demoLink: "#"
    },
    {
      id: 2,
      name: "FleetMaster Dashboard",
      description: "Designed and deployed a comprehensive fleet management system for delivery operations",
      image: "/project-fleet.jpg", // Placeholder
      results: [
        "Reduced fleet idle time by 18%",
        "Optimized delivery routes saving $240K annually",
        "Improved driver satisfaction score by 27%"
      ],
      tools: ["Tableau", "SQL", "Python", "User Testing"],
      demoLink: "#"
    }
  ];

  const toggleCard = (id: number) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };

  return (
    <section id="projects" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block">
          Featured Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-28 bg-teal rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="h-[400px]">
              <div className={`flip-card ${flippedCard === project.id ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-teal to-soft-orange relative">
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
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((tool) => (
                          <span 
                            key={tool} 
                            className="bg-soft-peach text-dark-gray py-1 px-2 rounded-full text-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={() => toggleCard(project.id)}
                        className="w-full bg-teal hover:bg-teal/90"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="flip-card-back bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-teal">{project.name}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">Key Results:</h4>
                      <ul className="list-disc pl-5 mb-6">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="mb-2">{result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <Button 
                        onClick={() => toggleCard(project.id)}
                        variant="outline"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        asChild
                        className="flex-1 bg-teal hover:bg-teal/90 gap-1"
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
