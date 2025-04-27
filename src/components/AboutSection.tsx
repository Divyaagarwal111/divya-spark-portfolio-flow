
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 pb-4 relative inline-block">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-purple-500 rounded-full"></div>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl mb-4 text-purple-600">
              Product & Operations Analyst | Data-Driven Problem Solver | Customer-Centric Strategist
            </h3>
            <p className="text-lg mb-6">
              I specialize in transforming user pain points into actionable product requirements, optimizing workflows, and driving data-informed decisions. With expertise in Agile methodologies and stakeholder management, I bridge gaps between teams to enhance product lifecycles and deliver impactful solutions.
            </p>
            <p className="text-lg mb-6">
              Passionate about efficiency, collaboration, and turning insights into results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
