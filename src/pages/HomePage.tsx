import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import LiveTests from '../components/LiveTests';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LiveTests />

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore More</h2>
            <p className="text-xl text-blue-100">
              Learn more about TRB and how we're transforming education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/who-we-are"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-blue-100 text-sm">Learn about our mission and values</p>
            </Link>

            <Link
              to="/how-it-works"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <p className="text-blue-100 text-sm">Understand our evaluation process</p>
            </Link>

            <Link
              to="/live-tests"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Live Tests</h3>
              <p className="text-blue-100 text-sm">Watch evaluations in real-time</p>
            </Link>

            <Link
              to="/teacher-profiles"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Teacher Profiles</h3>
              <p className="text-blue-100 text-sm">Browse evaluated teachers</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;