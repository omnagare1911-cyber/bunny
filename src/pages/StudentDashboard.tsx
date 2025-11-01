import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Star, 
  Play, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { label: 'Complaints Submitted', value: '12', icon: FileText, color: 'bg-blue-500' },
    { label: 'Teachers Reviewed', value: '8', icon: Users, color: 'bg-green-500' },
    { label: 'Live Tests Available', value: '5', icon: Play, color: 'bg-red-500' },
    { label: 'Pending Reviews', value: '3', icon: Clock, color: 'bg-amber-500' }
  ];

  const recentComplaints = [
    {
      id: 1,
      teacher: 'Prof. Sarah Johnson',
      subject: 'Mathematics',
      status: 'Under Review',
      date: '2025-01-10',
      category: 'Teaching Clarity'
    },
    {
      id: 2,
      teacher: 'Dr. Michael Chen',
      subject: 'Physics',
      status: 'Completed',
      date: '2025-01-08',
      category: 'Behavior'
    },
    {
      id: 3,
      teacher: 'Ms. Emily Davis',
      subject: 'English',
      status: 'Scheduled for Test',
      date: '2025-01-05',
      category: 'Knowledge'
    }
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: FileText, label: 'Submit Complaint', path: '/submit-complaint' },
    { icon: MessageSquare, label: 'My Complaints', path: '/my-complaints' },
    { icon: Star, label: 'Teacher Ratings', path: '/teacher-ratings' },
    { icon: Play, label: 'Live Tests', path: '/live-tests' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white fixed h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8">Student Portal</h2>
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    item.active 
                      ? 'bg-blue-800 text-amber-400' 
                      : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Here's what's happening with your complaints and reviews.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Link 
            to="/submit-complaint"
            className="bg-amber-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
          >
            <FileText className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold mb-2">Submit New Complaint</h3>
            <p className="text-amber-100">Report issues with your teachers</p>
          </Link>

          <Link 
            to="/live-test/1"
            className="bg-red-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
          >
            <Play className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold mb-2">Watch Live Tests</h3>
            <p className="text-red-100">See teacher evaluations in real-time</p>
          </Link>

          <Link 
            to="/teacher-ratings"
            className="bg-green-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
          >
            <Star className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold mb-2">View Teacher Ratings</h3>
            <p className="text-green-100">Check evaluation results</p>
          </Link>
        </div>

        {/* Recent Complaints */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Complaints</h2>
            <Link to="/my-complaints" className="text-blue-600 hover:text-blue-500 font-medium">
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Teacher</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentComplaints.map((complaint) => (
                  <tr key={complaint.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{complaint.teacher}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{complaint.subject}</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {complaint.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        complaint.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : complaint.status === 'Under Review'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{complaint.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;