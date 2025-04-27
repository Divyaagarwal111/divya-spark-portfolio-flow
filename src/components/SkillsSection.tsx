
import React, { useState } from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  icon: string;
  description: string;
  tools?: string[];
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Product Management",
      icon: "📊",
      description: "Jira, Confluence, Trello, Productboard",
      tools: ["Agile/Scrum", "Kanban"]
    },
    {
      name: "UX & Prototyping",
      icon: "🎨",
      description: "Figma, Sketch",
      tools: ["User Story Mapping", "Wireframing"]
    },
    {
      name: "Research & Analytics",
      icon: "📈",
      description: "Hotjar, UserTesting, Kraftful",
      tools: ["SQL", "Tableau", "Power BI", "Google Analytics"]
    }
  ];

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block">
          Key Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-purple-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <TooltipProvider key={skill.name}>
              <div 
                className="badge-container relative group"
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg p-6 h-full transition-all duration-300 border-2 ${expandedSkill === skill.name ? 'border-purple-500' : 'border-transparent'} hover:border-purple-500 hover:shadow-xl`}
                  onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                    <p className="text-neutral-gray">{skill.description}</p>
                  </div>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="absolute inset-0 cursor-pointer" aria-label={`Learn more about ${skill.name}`}></div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs p-4 bg-purple-900 text-white">
                      <div>
                        <h4 className="font-bold mb-2">Tools & Methods:</h4>
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
