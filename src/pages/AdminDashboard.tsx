import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Calendar, 
  BarChart3, 
  FileText,
  Search,
  Filter,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('complaints');

  const stats = [
    { label: 'Total Complaints', value: '156', icon: MessageSquare, color: 'bg-blue-500', change: '+12%' },
    { label: 'Teachers Under Review', value: '23', icon: Users, color: 'bg-amber-500', change: '+5%' },
    { label: 'Tests Scheduled', value: '8', icon: Calendar, color: 'bg-green-500', change: '+3%' },
    { label: 'Completed Evaluations', value: '45', icon: CheckCircle, color: 'bg-purple-500', change: '+18%' }
  ];

  const complaints = [
    {
      id: 1,
      student: 'Anonymous Student',
      teacher: 'Prof. Sarah Johnson',
      subject: 'Mathematics',
      college: 'Delhi University',
      category: 'Teaching Clarity',
      status: 'Under Review',
      date: '2025-01-10',
      priority: 'high'
    },
    {
      id: 2,
      student: 'Student ID: 2021001',
      teacher: 'Dr. Michael Chen',
      subject: 'Physics',
      college: 'IIT Mumbai',
      category: 'Behavior',
      status: 'Scheduled for Test',
      date: '2025-01-08',
      priority: 'medium'
    },
    {
      id: 3,
      student: 'Anonymous Student',
      teacher: 'Ms. Emily Davis',
      subject: 'English',
      college: 'JNU',
      category: 'Knowledge',
      status: 'Completed',
      date: '2025-01-05',
      priority: 'low'
    }
  ];

  const teachers = [
    {
      id: 1,
      name: 'Prof. Sarah Johnson',
      subject: 'Mathematics',
      college: 'Delhi University',
      complaints: 12,
      lastEvaluation: '2025-01-10',
      status: 'Under Review',
      rating: 3.2
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      subject: 'Physics',
      college: 'IIT Mumbai',
      complaints: 8,
      lastEvaluation: '2024-12-15',
      status: 'Scheduled',
      rating: 4.1
    }
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
    { icon: MessageSquare, label: 'Complaints', key: 'complaints' },
    { icon: Users, label: 'Teacher Shortlist', key: 'teachers' },
    { icon: Calendar, label: 'Test Scheduling', key: 'scheduling' },
    { icon: BarChart3, label: 'Analytics', key: 'analytics' },
    { icon: FileText, label: 'Reports', key: 'reports' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white fixed h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8">TRB Admin</h2>
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === item.key
                      ? 'bg-blue-800 text-amber-400'
                      : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage complaints, teacher evaluations, and system analytics</p>
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
                    <p className="text-green-600 text-sm mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Area */}
        {activeTab === 'complaints' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Complaint Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search complaints..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Student</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Teacher</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Priority</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint) => (
                    <tr key={complaint.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-900">{complaint.student}</td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{complaint.teacher}</div>
                          <div className="text-sm text-gray-600">{complaint.college}</div>
                        </div>
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
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          complaint.priority === 'high'
                            ? 'bg-red-100 text-red-800'
                            : complaint.priority === 'medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'teachers' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Teacher Shortlist</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Schedule Evaluation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div key={teacher.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      teacher.status === 'Under Review'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div>Subject: {teacher.subject}</div>
                    <div>College: {teacher.college}</div>
                    <div>Complaints: {teacher.complaints}</div>
                    <div>Last Evaluation: {teacher.lastEvaluation}</div>
                    <div>Rating: {teacher.rating}/5.0</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700">
                      View Profile
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-50">
                      Schedule Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">System Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Complaint Trends</h3>
                  <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Chart placeholder</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Teacher Performance</h3>
                  <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Chart placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;