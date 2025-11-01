import React, { useState } from 'react';
import { Upload, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

const ComplaintSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    college: '',
    teacher: '',
    categories: [],
    complaint: '',
    evidence: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const colleges = [
    'Delhi University',
    'IIT Mumbai',
    'JNU',
    'MIT Bangalore',
    'IIT Delhi',
    'Jawaharlal Nehru University'
  ];

  const teachers = [
    'Prof. Sarah Johnson - Mathematics',
    'Dr. Michael Chen - Physics',
    'Ms. Emily Davis - English Literature',
    'Prof. Robert Wilson - Computer Science',
    'Dr. Lisa Anderson - Chemistry'
  ];

  const categories = [
    { id: 'clarity', label: 'Teaching Clarity', description: 'Unclear explanations or confusing teaching methods' },
    { id: 'behavior', label: 'Inappropriate Behavior', description: 'Unprofessional conduct or attitude issues' },
    { id: 'knowledge', label: 'Subject Knowledge', description: 'Lack of expertise in the subject matter' },
    { id: 'fairness', label: 'Unfair Treatment', description: 'Biased grading or discriminatory behavior' },
    { id: 'engagement', label: 'Poor Engagement', description: 'Lack of interaction or boring teaching style' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Complaint submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaint Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your complaint has been received and will be reviewed by our team. 
            You'll be notified when the teacher evaluation is scheduled.
          </p>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <form onSubmit={handleSubmit}>
            {/* Step 1: College Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your College</h2>
                  <p className="text-gray-600 mb-6">Choose the institution where the teacher works</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    College Name
                  </label>
                  <select
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your college</option>
                    {colleges.map((college) => (
                      <option key={college} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Teacher Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Teacher</h2>
                  <p className="text-gray-600 mb-6">Choose the teacher you want to file a complaint about</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Teacher Name & Subject
                  </label>
                  <select
                    value={formData.teacher}
                    onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a teacher</option>
                    {teachers.map((teacher) => (
                      <option key={teacher} value={teacher}>
                        {teacher}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Complaint Categories */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Complaint Categories</h2>
                  <p className="text-gray-600 mb-6">Select all categories that apply to your complaint</p>
                </div>

                <div className="space-y-4">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        formData.categories.includes(category.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category.id)}
                          onChange={() => handleCategoryChange(category.id)}
                          className="h-5 w-5 text-blue-600 rounded"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{category.label}</h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Detailed Complaint */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Detailed Complaint</h2>
                  <p className="text-gray-600 mb-6">Provide specific details about your complaint</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Complaint Details
                  </label>
                  <textarea
                    value={formData.complaint}
                    onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide specific details about your complaint. Include dates, incidents, and any relevant context..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload Evidence (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Upload screenshots, documents, or audio files</p>
                    <input
                      type="file"
                      className="hidden"
                      id="evidence"
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.mp3,.wav"
                    />
                    <label
                      htmlFor="evidence"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-200"
                    >
                      Choose Files
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200"
                >
                  Submit Complaint
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSubmission;