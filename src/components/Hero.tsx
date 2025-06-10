import React from 'react';
import { ArrowRight, Utensils, Users, Heart } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/7ccf9163-c1c4-4ba4-8d7a-970abccd8966.jpg" 
              alt="SourceFoods Logo" 
              className="h-32 w-32 object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop Food Waste,
            <span className="text-green-600 block">Feed Communities</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            SourceFoods is revolutionizing how we tackle food waste by creating smarter 
            allocation systems that connect surplus food with communities in need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveSection('about')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActiveSection('recruitment')}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Join Our Mission
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Allocation</h3>
              <p className="text-gray-600">Advanced systems to match surplus food with those who need it most</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Built by volunteers passionate about reducing food waste</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Impact</h3>
              <p className="text-gray-600">Making a tangible difference in communities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;