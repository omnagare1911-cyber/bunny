import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Eye, Filter, Youtube, Clock, Users, TrendingUp } from 'lucide-react';

const LiveTestsPage = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const liveTests = [
    {
      id: 1,
      title: "Mathematics Teaching Evaluation - Prof. Sarah Johnson",
      thumbnail: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "live",
      viewers: 1247,
      subject: "Mathematics",
      college: "Delhi University",
      teacher: "Prof. Sarah Johnson",
      scheduledFor: "Live Now"
    },
    {
      id: 2,
      title: "Physics Demonstration Review - Dr. Michael Chen",
      thumbnail: "https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "upcoming",
      scheduledFor: "2025-01-15 2:00 PM",
      subject: "Physics",
      college: "IIT Mumbai",
      teacher: "Dr. Michael Chen"
    },
    {
      id: 3,
      title: "English Literature Class Assessment",
      thumbnail: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "completed",
      views: 5420,
      subject: "English",
      college: "JNU",
      teacher: "Ms. Emily Davis",
      rating: "Good Teacher",
      scheduledFor: "2025-01-05"
    },
    {
      id: 4,
      title: "Computer Science Coding Session Review",
      thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "upcoming",
      scheduledFor: "2025-01-16 10:00 AM",
      subject: "Computer Science",
      college: "MIT Bangalore",
      teacher: "Prof. Raj Kumar"
    },
    {
      id: 5,
      title: "Chemistry Laboratory Skills Assessment",
      thumbnail: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "completed",
      views: 3890,
      subject: "Chemistry",
      college: "Delhi University",
      teacher: "Dr. Priya Sharma",
      rating: "Needs Improvement",
      scheduledFor: "2025-01-03"
    },
    {
      id: 6,
      title: "History Teaching Methods Evaluation",
      thumbnail: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
      status: "upcoming",
      scheduledFor: "2025-01-17 3:00 PM",
      subject: "History",
      college: "JNU",
      teacher: "Prof. Amit Verma"
    }
  ];

  const filteredTests = filterStatus === 'all'
    ? liveTests
    : liveTests.filter(test => test.status === filterStatus);

  const stats = [
    { label: 'Total Evaluations', value: '150+', icon: Play },
    { label: 'Live Viewers', value: '2.5K+', icon: Users },
    { label: 'Scheduled Tests', value: '8', icon: Calendar },
    { label: 'YouTube Subscribers', value: '15K+', icon: Youtube }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Youtube className="h-12 w-12 text-red-500" />
              <h1 className="text-4xl sm:text-5xl font-bold">Live Tests</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to the TRB Live Evaluation Zone! Watch our live teacher evaluation
              sessions streamed directly on our official YouTube Channel.
            </p>
            <a
              href="https://www.youtube.com/@teachingreviewboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
            >
              <Youtube className="h-5 w-5" />
              <span>Subscribe to TRB YouTube Channel</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Evaluation Sessions</h2>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filterStatus === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('live')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filterStatus === 'live'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Live Now
                </button>
                <button
                  onClick={() => setFilterStatus('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filterStatus === 'upcoming'
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setFilterStatus('completed')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filterStatus === 'completed'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTests.map((test, index) => (
              <Link
                key={test.id}
                to={`/live-test/${test.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-200">
                      <Play className="h-4 w-4" />
                      <span>Watch Now</span>
                    </div>
                  </div>

                  {/* Viewer Count for Live / Views for Completed */}
                  {test.status === 'live' && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{test.viewers?.toLocaleString()}</span>
                    </div>
                  )}
                  {test.status === 'completed' && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{test.views?.toLocaleString()} views</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {test.subject}
                    </span>
                    {test.rating && (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        test.rating === 'Good Teacher'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {test.rating}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {test.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{test.teacher}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{test.college}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{test.scheduledFor}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Each Session Includes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every TRB live evaluation is comprehensive and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Oral Tests</h3>
              <p className="text-gray-600">Live questioning on subject knowledge and expertise</p>
            </div>

            <div className="text-center animate-fade-up animation-delay-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teaching Assessments</h3>
              <p className="text-gray-600">Practical demonstrations of teaching methods</p>
            </div>

            <div className="text-center animate-fade-up animation-delay-600">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Process</h3>
              <p className="text-gray-600">Everything broadcast live for public viewing</p>
            </div>

            <div className="text-center animate-fade-up animation-delay-900">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Rating</h3>
              <p className="text-gray-600">Clear verdict: Good Teacher or Needs Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Never Miss an Evaluation</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel to get notified when we go live with new teacher evaluations.
          </p>
          <a
            href="https://www.youtube.com/@TRBOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
          >
            <Youtube className="h-5 w-5" />
            <span>Subscribe Now</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LiveTestsPage;
