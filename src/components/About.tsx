import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';
import teamImage from '../assets/image.jpg'; // Adjust path based on your folder structure

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Image */}
        <div className="mb-16">
          <img
            src={teamImage}
            alt="Our Team"
            className="w-full max-h-[500px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* About Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About SourceFoods</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of food distribution, where technology meets compassion 
            to create sustainable solutions for food waste and hunger.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every year, billions of tons of food go to waste while millions of people face hunger. 
              SourceFoods bridges this gap through innovative technology that optimizes food allocation, 
              ensuring surplus food reaches those who need it most.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform connects restaurants, grocery stores, farms, and food banks with 
              communities, creating an efficient network that reduces waste and feeds people.
            </p>
          </div>

          {/* Removed goals section here */}
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Precision Matching</h4>
              <p className="text-gray-600">
                AI-powered algorithms match food surplus with demand in real-time
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h4>
              <p className="text-gray-600">
                Quick coordination ensures food reaches recipients while fresh
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h4>
              <p className="text-gray-600">
                Track impact and see exactly where your contributions go
              </p>
            </div>
          </div>
        </div>

        {/* Project Status */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Status</h3>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
            🚧 In Development - Join Us in Building the Future
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            SourceFoods is currently in active development. We're assembling a passionate team 
            of volunteers to bring this vision to life. Your skills and dedication can help 
            create lasting change in how we handle food distribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
