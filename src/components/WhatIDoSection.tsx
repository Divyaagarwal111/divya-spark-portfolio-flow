
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export default function WhatIDoSection() {
  const services: ServiceItem[] = [
    {
      title: "Product Execution",
      description: "Defining PRDs, A/B testing, and managing Agile roadmaps.",
      icon: "🚀"
    },
    {
      title: "Process Optimization",
      description: "Identifying metric gaps, reducing inefficiencies, and scaling team performance.",
      icon: "⚙️"
    },
    {
      title: "Stakeholder Leadership",
      description: "Collaborating cross-functionally to align solutions with business goals.",
      icon: "👥"
    },
    {
      title: "Customer Advocacy",
      description: "Resolving high-impact escalations and translating pain points into product requirements.",
      icon: "💬"
    }
  ];

  return (
    <section id="what-i-do" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pb-4 relative inline-block">
          What I Do
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-purple-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{service.title}</h3>
                  <p className="text-neutral-gray">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Badge className="bg-pink-100 text-purple-700 hover:bg-pink-200 py-1.5 px-3 text-sm">
            Passionate about building solutions that balance user needs, data, and operational excellence.
          </Badge>
        </div>
      </div>
    </section>
  );
}
