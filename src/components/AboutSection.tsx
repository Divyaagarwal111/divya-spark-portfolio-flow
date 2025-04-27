
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 pb-4 relative inline-block">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-teal rounded-full"></div>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Seasoned Product Manager and Operations Analyst with 5+ years of experience driving efficiency and customer satisfaction through data-informed solutions. Proven track record of streamlining processes, leading cross-functional teams, and delivering innovative product features that align with business objectives and user needs.
            </p>
            <p className="text-lg mb-6">
              Skilled in identifying optimization opportunities through data analysis and stakeholder collaboration, with a focus on translating insights into actionable product roadmaps and operational strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
