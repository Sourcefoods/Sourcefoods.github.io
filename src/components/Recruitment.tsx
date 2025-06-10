import React from 'react';
import { Code, Palette, Users, Megaphone, Heart, ArrowRight } from 'lucide-react';

interface RecruitmentProps {
  setActiveSection: (section: string) => void;
}

const Recruitment: React.FC<RecruitmentProps> = ({ setActiveSection }) => {
  const roles = [
    {
      icon: Code,
      title: 'Developers',
      description: 'Help build our platform using React, Node.js, and modern web technologies',
      skills: ['Frontend Development', 'Backend Development', 'Mobile Development', 'DevOps'],
      commitment: 'Flexible hours, 5-10 hours/week'
    },
    {
      icon: Palette,
      title: 'Designers',
      description: 'Create beautiful, intuitive interfaces that make food redistribution seamless',
      skills: ['UI/UX Design', 'Graphic Design', 'User Research', 'Prototyping'],
      commitment: 'Project-based, 3-8 hours/week'
    },
    {
      icon: Users,
      title: 'Community Managers',
      description: 'Build relationships with food banks, restaurants, and community organizations',
      skills: ['Relationship Building', 'Communication', 'Event Planning', 'Social Media'],
      commitment: 'Flexible schedule, 4-6 hours/week'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Outreach',
      description: 'Spread awareness about our mission and grow our community impact',
      skills: ['Content Creation', 'Social Media Marketing', 'PR', 'Campaign Management'],
      commitment: 'Flexible hours, 3-7 hours/week'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a passionate community working to eliminate food waste and hunger. 
            Every skill matters, every hour counts, every volunteer makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <role.icon className="text-green-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Skills We're Looking For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <strong>Time Commitment:</strong> {role.commitment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <Heart className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer with SourceFoods?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="text-2xl font-bold text-green-600">Real Impact</div>
              </div>
              <p className="text-gray-600">See your work directly reduce food waste and feed communities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="text-2xl font-bold text-green-600">Skill Growth</div>
              </div>
              <p className="text-gray-600">Learn new technologies and gain experience in social impact projects</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="text-2xl font-bold text-green-600">Community</div>
              </div>
              <p className="text-gray-600">Join a network of passionate individuals working toward positive change</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of volunteers already working to transform food distribution
          </p>
          <button
            onClick={() => setActiveSection('contact')}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight size={20} />
          </button>
          <div className="mt-6 text-sm opacity-75">
            No long-term commitment required • Flexible scheduling • Remote-friendly
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;