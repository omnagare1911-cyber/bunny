import React from 'react';
import { Play, Calendar, Eye } from 'lucide-react';

const liveTests = [
  {
    id: 1,
    title: "Mathematics Teaching Evaluation - Prof. Sarah Johnson",
    thumbnail: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    status: "live",
    viewers: 1247,
    subject: "Mathematics",
    college: "Delhi University"
  },
  {
    id: 2,
    title: "Physics Demonstration Review - Dr. Michael Chen",
    thumbnail: "https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    status: "upcoming",
    scheduledFor: "2025-01-15 2:00 PM",
    subject: "Physics",
    college: "IIT Mumbai"
  },
  {
    id: 3,
    title: "English Literature Class Assessment",
    thumbnail: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    status: "completed",
    views: 5420,
    subject: "English",
    college: "JNU"
  },
  {
    id: 4,
    title: "Computer Science Coding Session Review",
    thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    status: "upcoming",
    scheduledFor: "2025-01-16 10:00 AM",
    subject: "Computer Science",
    college: "MIT Bangalore"
  }
];

const LiveTests = () => {
  return (
    <section id="live-tests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live & Upcoming Tests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch live teacher evaluations and catch up on previous assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {liveTests.map((test, index) => (
            <div 
              key={test.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={test.thumbnail} 
                  alt={test.title}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {test.status === 'live' && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>LIVE</span>
                    </span>
                  )}
                  {test.status === 'upcoming' && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>UPCOMING</span>
                    </span>
                  )}
                  {test.status === 'completed' && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      COMPLETED
                    </span>
                  )}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                  <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-200">
                    <Play className="h-4 w-4" />
                    <span>Watch Now</span>
                  </button>
                </div>

                {/* Viewer Count for Live */}
                {test.status === 'live' && (
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{test.viewers.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {test.subject}
                  </span>
                  <span className="text-gray-500 text-sm">{test.college}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {test.title}
                </h3>

                <div className="flex items-center justify-between">
                  {test.status === 'upcoming' && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{test.scheduledFor}</span>
                    </div>
                  )}
                  {test.status === 'completed' && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{test.views?.toLocaleString()} views</span>
                    </div>
                  )}
                  {test.status === 'live' && (
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      <span>Live now</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transform hover:scale-105 transition-all duration-200">
            View All Tests
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveTests;