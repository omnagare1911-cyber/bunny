import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Sparkles, FileText } from 'lucide-react';

const WhoWeArePage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We hold teachers accountable through transparent, independent evaluations.'
    },
    {
      icon: Users,
      title: 'Student-Driven',
      description: 'Every evaluation starts with student feedback and complaints.'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Our mission is to ensure every student receives quality teaching.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'All evaluations are public and broadcast live on YouTube.'
    }
  ];

  const stats = [
    { value: '100+', label: 'Educational Institutions' },
    { value: '500+', label: 'Teachers Evaluated' },
    { value: '10,000+', label: 'Student Complaints Processed' },
    { value: '95%', label: 'Student Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Who We Are</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                Teaching Review Board (TRB)
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                At Teaching Review Board (TRB), we believe that education quality starts with accountability.
                We are an independent, student-driven evaluation firm that monitors and reviews the teaching
                standards of colleges and universities across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="h-8 w-8 text-amber-500" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Students can anonymously submit complaints about poor teaching quality or unqualified staff.
                  Based on verified feedback, TRB conducts independent oral and practical tests of the concerned teachers.
                </p>
                <p>
                  Our goal is simple — to build a transparent educational environment where every student receives
                  quality teaching and every teacher is encouraged to improve.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Your Voice. Our Review. Education Made Accountable.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-up animation-delay-300">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Education quality"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that drive everything we do at TRB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Making a difference in education across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <img
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Teacher evaluation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up animation-delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Anonymous Complaint System</h3>
                    <p className="text-gray-600">
                      Students can safely submit complaints about teaching quality without fear of retaliation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Independent Verification</h3>
                    <p className="text-gray-600">
                      Our team verifies all complaints and ensures complete confidentiality of student identities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Live Teacher Evaluations</h3>
                    <p className="text-gray-600">
                      We conduct oral and practical tests broadcast live on YouTube for full transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transparent Results</h3>
                    <p className="text-gray-600">
                      Teachers are rated as "Good Teacher" or "Needs Improvement" with detailed reports shared publicly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are using TRB to improve education quality across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-complaint"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Submit Your Complaint</span>
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-200"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeArePage;
