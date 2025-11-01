import React from 'react';
import { Target, Eye, Users, Award, BookOpen, Shield } from 'lucide-react';

const AboutPage = () => {
  const mission = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize education by creating a transparent platform where student voices drive teacher accountability and improvement.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where every student receives quality education through continuous teacher evaluation and improvement.'
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Transparency, fairness, and continuous improvement in educational standards through student feedback.'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Student-Driven',
      description: 'Students submit complaints and feedback about their teachers through our secure platform.'
    },
    {
      icon: BookOpen,
      title: 'Expert Evaluation',
      description: 'Our team of education experts conducts thorough evaluations and live testing sessions.'
    },
    {
      icon: Award,
      title: 'Transparent Results',
      description: 'All evaluation results are published publicly on YouTube and our platform for complete transparency.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former education policy advisor with 15+ years in educational reform.'
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Head of Evaluations',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Educational psychologist specializing in teacher assessment and development.'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Tech entrepreneur focused on building scalable educational platforms.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About TRB</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Teacher Review Board is transforming education by giving students a voice in 
              teacher evaluation and creating a transparent system for educational improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mission.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures fair and thorough teacher evaluations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TRB was founded in 2023 by a group of educators, students, and technology 
                  professionals who recognized the need for a transparent and fair system 
                  to evaluate teaching quality in educational institutions.
                </p>
                <p>
                  After witnessing countless cases where student complaints about poor 
                  teaching went unheard or unaddressed, we decided to create a platform 
                  that gives students a voice and ensures accountability in education.
                </p>
                <p>
                  Today, TRB serves over 100+ educational institutions across India, 
                  helping improve teaching standards and ensuring students receive 
                  the quality education they deserve.
                </p>
              </div>
            </div>
            <div className="animate-fade-up animation-delay-300">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Education and learning"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working to transform education through transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the change. Help us create a better educational system for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transform hover:scale-105 transition-all duration-200">
              Submit a Complaint
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-200">
              Watch Live Tests
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;