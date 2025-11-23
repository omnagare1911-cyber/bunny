import { BookOpen, Target, Users, FileText } from 'lucide-react';

const PlacementSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Placement Support
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resources and guidance to help you succeed in your career placement journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Career Guidance</h3>
            </div>
            <p className="text-slate-600">
              Get expert guidance on career paths, job search strategies, and professional development opportunities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Resources</h3>
            </div>
            <p className="text-slate-600">
              Access placement resources, resume templates, interview preparation materials, and more.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Mentor Network</h3>
            </div>
            <p className="text-slate-600">
              Connect with mentors and industry professionals who can guide you through your placement journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Learning Hub</h3>
            </div>
            <p className="text-slate-600">
              Develop skills through curated courses, workshops, and training materials designed for placement success.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h2>
          <p className="text-slate-700">
            We're preparing comprehensive placement support materials and resources. Check back soon for detailed information, job listings, company profiles, and personalized guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementSupport;
