import React from 'react';
import { Mail, Mic, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: "Submit Complaint",
    description: "Students submit detailed complaints about their teachers through our secure platform.",
    emoji: "📩"
  },
  {
    icon: Mic,
    title: "TRB Evaluates Teacher",
    description: "Our expert team conducts comprehensive evaluations and live testing sessions.",
    emoji: "🎤"
  },
  {
    icon: BarChart3,
    title: "Results Published",
    description: "Transparent results are published on YouTube and our platform for everyone to see.",
    emoji: "📊"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process ensures transparency and accountability in education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl mb-4">{step.emoji}</div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-1 bg-blue-800 rounded"></div>
            <div className="w-8 h-1 bg-amber-500 rounded"></div>
            <div className="w-8 h-1 bg-blue-800 rounded"></div>
          </div>
          <p className="text-sm text-gray-500">
            Trusted by students from over 100+ institutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;