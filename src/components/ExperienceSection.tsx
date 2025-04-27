
import React from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: Array<{
    text: string;
    metric?: string;
  }>;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Amazon",
      role: "Senior Operations Analyst",
      period: "2021 - Present",
      achievements: [
        {
          text: "Led PMP initiatives across 3 departments",
          metric: "Improved operational efficiency by 240 basis points"
        },
        {
          text: "Optimized customer service workflows",
          metric: "Reduced 98K+ repeat contacts"
        },
        {
          text: "Implemented data-driven decision framework",
          metric: "$1.2M cost savings annually"
        }
      ]
    },
    {
      company: "Swiggy",
      role: "Product Manager",
      period: "2018 - 2021",
      achievements: [
        {
          text: "Spearheaded pre-ordering feature development",
          metric: "23% increase in customer satisfaction"
        },
        {
          text: "Managed cross-functional teams across 3 offices",
          metric: "Delivered 4 major features ahead of schedule"
        },
        {
          text: "Created data dashboards for operational insights",
          metric: "Adopted by 8 teams company-wide"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block">
          Work Experience
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-28 bg-teal rounded-full"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-teal text-white px-5 py-2 rounded-full text-sm font-bold inline-block">
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold">
                  {exp.role} <span className="text-teal">@ {exp.company}</span>
                </h3>
              </div>
              
              <div className="pl-4 md:pl-8 border-l-2 border-light-gray">
                {exp.achievements.map((achievement, achieveIdx) => (
                  <TooltipProvider key={achieveIdx}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="timeline-item pl-6 pb-6 relative hover:text-teal transition-colors cursor-pointer">
                          <div className="timeline-dot bg-teal"></div>
                          <p>{achievement.text}</p>
                        </div>
                      </TooltipTrigger>
                      
                      {achievement.metric && (
                        <TooltipContent side="right" className="bg-dark-gray text-white p-3">
                          <p className="font-bold">{achievement.metric}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
