
import React, { useState } from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import {
  Briefcase,
  FileText,
  BarChart3,
  Layout
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  tools?: string[];
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Product Management",
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      description: "Product Execution & Agile Roadmaps",
      tools: ["PRDs", "A/B Testing", "Agile", "Stakeholder Management"]
    },
    {
      name: "Process Optimization",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      description: "Metrics & Performance Scaling",
      tools: ["KPI Analysis", "Workflow Optimization", "Team Performance"]
    },
    {
      name: "Customer Advocacy",
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      description: "User-Centric Solutions",
      tools: ["User Research", "Pain Point Analysis", "Requirements Gathering"]
    },
    {
      name: "Documentation",
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      description: "Technical Documentation",
      tools: ["PRDs", "User Stories", "Technical Specs"]
    }
  ];

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-dark-gray text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block">
          Key Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-purple-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <TooltipProvider key={skill.name}>
              <div className="badge-container relative group">
                <div 
                  className={`bg-card-bg rounded-2xl shadow-lg p-6 h-full transition-all duration-300 border-2 ${
                    expandedSkill === skill.name ? 'border-purple-500' : 'border-transparent'
                  } hover:border-purple-500 hover:shadow-xl`}
                  onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">{skill.name}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="absolute inset-0 cursor-pointer" aria-label={`Learn more about ${skill.name}`}></div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs p-4 bg-purple-900 text-white">
                      <div>
                        <h4 className="font-bold mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.tools?.map((tool) => (
                            <span 
                              key={tool} 
                              className="bg-purple-400/20 text-purple-200 text-xs py-1 px-2 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
}
