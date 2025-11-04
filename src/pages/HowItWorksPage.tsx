import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, UserCheck, Youtube, BarChart3, Building2, Shield, Clock } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Student Complaint',
      description: 'Students anonymously file a complaint through the TRB platform describing the issue and the teacher involved.',
      color: 'from-blue-600 to-blue-700',
      features: [
        'Complete anonymity guaranteed',
        'Detailed complaint form',
        'Secure submission process',
        'No fear of retaliation'
      ]
    },
    {
      number: 2,
      icon: CheckCircle,
      title: 'Verification & Review',
      description: 'TRB verifies the information and ensures that the student\'s identity remains 100% confidential.',
      color: 'from-green-600 to-green-700',
      features: [
        'Thorough verification process',
        '100% identity protection',
        'Complaint validity check',
        'Professional review team'
      ]
    },
    {
      number: 3,
      icon: UserCheck,
      title: 'Teacher Evaluation',
      description: 'Our team physically visits the college and conducts a live oral and practical test to assess the teacher\'s real knowledge and teaching ability.',
      color: 'from-amber-600 to-amber-700',
      features: [
        'On-site physical evaluation',
        'Oral knowledge assessment',
        'Practical teaching demo',
        'Real-time skill testing'
      ]
    },
    {
      number: 4,
      icon: Youtube,
      title: 'Public Transparency',
      description: 'All evaluations are broadcast live on YouTube for full transparency.',
      color: 'from-red-600 to-red-700',
      features: [
        'Live streaming on YouTube',
        'Public access to evaluations',
        'Recorded for future reference',
        'Complete transparency'
      ]
    },
    {
      number: 5,
      icon: BarChart3,
      title: 'Result & Feedback',
      description: 'After the review, the teacher is tagged as a "Good Teacher" or "Needs Improvement" based on performance. A detailed report is then shared with the institution for further action.',
      color: 'from-purple-600 to-purple-700',
      features: [
        'Clear rating system',
        'Detailed performance report',
        'Institutional feedback',
        'Action recommendations'
      ]
    }
  ];

  const timeline = [
    { phase: 'Complaint Submission', duration: '1 day', icon: FileText },
    { phase: 'Verification Process', duration: '2-3 days', icon: CheckCircle },
    { phase: 'Evaluation Scheduling', duration: '3-5 days', icon: Clock },
    { phase: 'Live Testing', duration: '1 day', icon: Youtube },
    { phase: 'Report & Results', duration: '2 days', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive five-step process ensures transparency, accountability,
              and quality in educational institutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1">
                    <div className="relative">
                      <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full`}></div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 relative z-10`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-5xl font-bold text-gray-200">0{step.number}</span>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 shadow-2xl`}>
                      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
                        <div className="text-6xl font-bold mb-4 opacity-90">Step {step.number}</div>
                        <div className="text-xl font-semibold mb-4">{step.title}</div>
                        <div className="space-y-2 text-sm opacity-90">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From complaint submission to final report, here's what to expect
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-center mb-2">
                        {item.phase}
                      </h3>
                      <div className="text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Total estimated time: <span className="font-semibold text-gray-900">10-14 days</span> from complaint to final report
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TRB?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach ensures fair and transparent teacher evaluations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Confidential</h3>
              <p className="text-gray-600">
                Student identities are completely protected throughout the entire process.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Transparent</h3>
              <p className="text-gray-600">
                All evaluations are broadcast live on YouTube for public viewing.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <Building2 className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Institutional Impact</h3>
              <p className="text-gray-600">
                Detailed reports help institutions improve their teaching standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your first complaint and be part of the change in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-complaint"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Submit Complaint</span>
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
