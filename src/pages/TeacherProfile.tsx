import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Calendar, Play, AlertTriangle, CheckCircle, User, GraduationCap, MapPin } from 'lucide-react';

const TeacherProfile = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const teacher = {
    id: 1,
    name: 'Prof. Sarah Johnson',
    subject: 'Mathematics',
    college: 'Delhi University',
    department: 'Department of Mathematics',
    experience: '8 years',
    avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    totalComplaints: 15,
    rating: 3.2,
    lastEvaluation: '2025-01-10'
  };

  const complaintCategories = [
    { category: 'Teaching Clarity', count: 6, percentage: 40, color: 'bg-red-500' },
    { category: 'Behavior', count: 3, percentage: 20, color: 'bg-orange-500' },
    { category: 'Knowledge', count: 3, percentage: 20, color: 'bg-yellow-500' },
    { category: 'Fairness', count: 2, percentage: 13, color: 'bg-blue-500' },
    { category: 'Engagement', count: 1, percentage: 7, color: 'bg-purple-500' }
  ];

  const evaluationResults = [
    {
      id: 1,
      date: '2025-01-10',
      type: 'Live Teaching Demo',
      result: 'Needs Improvement',
      status: 'warning',
      videoUrl: 'https://youtube.com/watch?v=example1'
    },
    {
      id: 2,
      date: '2024-12-15',
      type: 'Subject Knowledge Test',
      result: 'Good Teacher',
      status: 'success',
      videoUrl: 'https://youtube.com/watch?v=example2'
    },
    {
      id: 3,
      date: '2024-11-20',
      type: 'Student Interaction Assessment',
      result: 'Needs Improvement',
      status: 'warning',
      videoUrl: 'https://youtube.com/watch?v=example3'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Mathematics Teaching Evaluation - Prof. Sarah Johnson',
      thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      date: '2025-01-10',
      views: 1247,
      duration: '45:32'
    },
    {
      id: 2,
      title: 'Subject Knowledge Assessment - Mathematics',
      thumbnail: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      date: '2024-12-15',
      views: 892,
      duration: '32:18'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img 
                src={teacher.avatar} 
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{teacher.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>{teacher.subject}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{teacher.college}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{teacher.experience} experience</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(teacher.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{teacher.rating}/5.0</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{teacher.totalComplaints}</span> total complaints
                </div>
                
                <div className="text-sm text-gray-600">
                  Last evaluated: <span className="font-medium">{teacher.lastEvaluation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Complaint Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-up">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Complaint Overview</h2>
              
              <div className="space-y-4">
                {complaintCategories.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="text-gray-700">{item.category}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {item.count} ({item.percentage}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Results */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-up animation-delay-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">TRB Evaluation Results</h2>
              
              <div className="space-y-4">
                {evaluationResults.map((result) => (
                  <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{result.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {result.status === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        )}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          result.status === 'success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {result.result}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-2">{result.type}</h3>
                    
                    <a
                      href={result.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-500 text-sm"
                    >
                      <Play className="h-4 w-4" />
                      <span>Watch Evaluation Video</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Video Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-up animation-delay-600">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Evaluation Videos</h2>
              
              <div className="space-y-4">
                {videos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden mb-3">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-32 object-cover group-hover:brightness-110 transition-all duration-200"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{video.date}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View All Videos
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-up animation-delay-900">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Evaluations</span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Passed Evaluations</span>
                  <span className="font-semibold text-green-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Needs Improvement</span>
                  <span className="font-semibold text-amber-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-gray-900">33%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;