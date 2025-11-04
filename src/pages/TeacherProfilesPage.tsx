import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Calendar, Youtube, GraduationCap, MapPin, TrendingUp, TrendingDown } from 'lucide-react';

const TeacherProfilesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [filterSubject, setFilterSubject] = useState('all');

  const teachers = [
    {
      id: 1,
      name: 'Prof. Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'Mathematics',
      college: 'Delhi University',
      rating: 'Needs Improvement',
      score: 3.2,
      oralScore: 65,
      practicalScore: 70,
      knowledgeScore: 62,
      evaluationDate: '2025-01-10',
      youtubeLink: 'https://youtube.com/watch?v=example1',
      complaints: 15
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'Physics',
      college: 'IIT Mumbai',
      rating: 'Good Teacher',
      score: 4.1,
      oralScore: 85,
      practicalScore: 82,
      knowledgeScore: 88,
      evaluationDate: '2024-12-15',
      youtubeLink: 'https://youtube.com/watch?v=example2',
      complaints: 8
    },
    {
      id: 3,
      name: 'Ms. Emily Davis',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'English',
      college: 'JNU',
      rating: 'Good Teacher',
      score: 4.5,
      oralScore: 90,
      practicalScore: 92,
      knowledgeScore: 88,
      evaluationDate: '2025-01-05',
      youtubeLink: 'https://youtube.com/watch?v=example3',
      complaints: 5
    },
    {
      id: 4,
      name: 'Prof. Raj Kumar',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'Computer Science',
      college: 'MIT Bangalore',
      rating: 'Good Teacher',
      score: 4.3,
      oralScore: 88,
      practicalScore: 85,
      knowledgeScore: 90,
      evaluationDate: '2024-12-20',
      youtubeLink: 'https://youtube.com/watch?v=example4',
      complaints: 6
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'Chemistry',
      college: 'Delhi University',
      rating: 'Needs Improvement',
      score: 3.5,
      oralScore: 68,
      practicalScore: 72,
      knowledgeScore: 70,
      evaluationDate: '2025-01-03',
      youtubeLink: 'https://youtube.com/watch?v=example5',
      complaints: 12
    },
    {
      id: 6,
      name: 'Prof. Amit Verma',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      subject: 'History',
      college: 'JNU',
      rating: 'Good Teacher',
      score: 4.0,
      oralScore: 80,
      practicalScore: 78,
      knowledgeScore: 85,
      evaluationDate: '2024-12-28',
      youtubeLink: 'https://youtube.com/watch?v=example6',
      complaints: 7
    }
  ];

  const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science', 'History'];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.college.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === 'all' || teacher.rating === filterRating;
    const matchesSubject = filterSubject === 'all' || teacher.subject === filterSubject;
    return matchesSearch && matchesRating && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Teacher Profiles</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore verified teacher profiles evaluated by TRB. All data is based on our
              independent evaluation process to maintain transparency and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by teacher name or college..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={filterRating}
                  onChange={(e) => setFilterRating(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Ratings</option>
                  <option value="Good Teacher">Good Teacher</option>
                  <option value="Needs Improvement">Needs Improvement</option>
                </select>
              </div>

              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredTeachers.length}</span> teacher profiles
          </p>
        </div>
      </section>

      {/* Teacher Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header with Avatar and Rating Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                        <img
                          src={teacher.avatar}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{teacher.name}</h3>
                        <div className="flex items-center space-x-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= Math.floor(teacher.score)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({teacher.score})</span>
                        </div>
                      </div>
                    </div>

                    {teacher.rating === 'Good Teacher' ? (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        <TrendingUp className="h-3 w-3" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                        <TrendingDown className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  {/* TRB Rating */}
                  <div className={`rounded-lg p-3 mb-4 ${
                    teacher.rating === 'Good Teacher'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-amber-50 border border-amber-200'
                  }`}>
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">TRB Rating</p>
                      <p className={`font-semibold ${
                        teacher.rating === 'Good Teacher'
                          ? 'text-green-800'
                          : 'text-amber-800'
                      }`}>
                        {teacher.rating}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>{teacher.subject}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{teacher.college}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Evaluated: {teacher.evaluationDate}</span>
                    </div>
                  </div>

                  {/* Test Scores */}
                  <div className="space-y-2 mb-4">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Oral Test</span>
                        <span>{teacher.oralScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            teacher.oralScore >= 75 ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${teacher.oralScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Practical Test</span>
                        <span>{teacher.practicalScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            teacher.practicalScore >= 75 ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${teacher.practicalScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Knowledge Test</span>
                        <span>{teacher.knowledgeScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            teacher.knowledgeScore >= 75 ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${teacher.knowledgeScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-200">
                    <Link
                      to={`/teacher/${teacher.id}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      View Profile
                    </Link>
                    <a
                      href={teacher.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Teacher Profiles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each profile contains comprehensive evaluation data from TRB assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Subject Expertise</h3>
              <p className="text-gray-600 text-sm">
                Detailed assessment of teacher's knowledge in their subject area
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Video Evidence</h3>
              <p className="text-gray-600 text-sm">
                Watch the full evaluation session on YouTube for complete transparency
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Evaluations</h3>
              <p className="text-gray-600 text-sm">
                All profiles show the latest TRB evaluation date and results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfilesPage;
