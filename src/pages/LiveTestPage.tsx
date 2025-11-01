import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Users, MessageCircle, CheckSquare, Clock } from 'lucide-react';

const LiveTestPage = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const liveTest = {
    id: 1,
    title: 'Mathematics Teaching Evaluation - Prof. Sarah Johnson',
    teacher: 'Prof. Sarah Johnson',
    subject: 'Mathematics',
    college: 'Delhi University',
    status: 'live',
    viewers: 1247,
    startTime: '2:00 PM',
    duration: '45 minutes',
    videoId: 'dQw4w9WgXcQ' // YouTube video ID
  };

  const testCriteria = [
    { id: 1, criterion: 'Subject Knowledge', completed: true },
    { id: 2, criterion: 'Teaching Clarity', completed: true },
    { id: 3, criterion: 'Student Interaction', completed: false },
    { id: 4, criterion: 'Problem Solving Demo', completed: false },
    { id: 5, criterion: 'Q&A Session', completed: false }
  ];

  const liveComments = [
    { id: 1, user: 'Student123', comment: 'Great explanation of calculus concepts!', time: '2 min ago' },
    { id: 2, user: 'MathLover', comment: 'Could use more examples', time: '5 min ago' },
    { id: 3, user: 'Anonymous', comment: 'Very clear teaching style', time: '8 min ago' },
    { id: 4, user: 'StudentX', comment: 'Good use of visual aids', time: '12 min ago' },
    { id: 5, user: 'Reviewer', comment: 'Engaging presentation', time: '15 min ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  LIVE
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="h-4 w-4" />
                <span>{liveTest.viewers.toLocaleString()} viewers</span>
              </div>
            </div>
            <div className="text-white text-sm">
              Started at {liveTest.startTime} • {liveTest.duration}
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">{liveTest.title}</h1>
          <div className="flex items-center space-x-4 text-gray-200">
            <span>{liveTest.teacher}</span>
            <span>•</span>
            <span>{liveTest.subject}</span>
            <span>•</span>
            <span>{liveTest.college}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Video Area */}
          <div className="lg:col-span-3">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl animate-fade-up">
              <div className="aspect-video relative">
                {/* YouTube Embed Placeholder */}
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Live Stream</p>
                    <p className="text-sm text-gray-400">
                      YouTube embed would be here in production
                    </p>
                  </div>
                </div>
                
                {/* Live indicator overlay */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
                
                {/* Viewer count overlay */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{liveTest.viewers.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Video Controls/Info */}
            <div className="bg-white rounded-2xl p-6 mt-6 shadow-lg animate-fade-up animation-delay-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Evaluation</h2>
              <p className="text-gray-600 mb-4">
                This live evaluation session is being conducted by the TRB team to assess 
                Prof. Sarah Johnson's teaching methods, subject knowledge, and student interaction 
                skills based on recent student complaints.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mathematics</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Live Demo</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Student Feedback</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Test Criteria */}
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-up animation-delay-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <CheckSquare className="h-5 w-5" />
                <span>Test Criteria</span>
              </h3>
              
              <div className="space-y-3">
                {testCriteria.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      item.completed 
                        ? 'bg-green-500' 
                        : 'bg-gray-300'
                    }`}>
                      {item.completed && (
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${
                      item.completed 
                        ? 'text-gray-900 font-medium' 
                        : 'text-gray-600'
                    }`}>
                      {item.criterion}
                    </span>
                    {!item.completed && (
                      <Clock className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">2/5 completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-up animation-delay-900">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Live Chat</span>
              </h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {liveComments.map((comment) => (
                  <div key={comment.id} className="text-sm">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-blue-600">{comment.user}</span>
                      <span className="text-gray-400 text-xs">{comment.time}</span>
                    </div>
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type a comment..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTestPage;