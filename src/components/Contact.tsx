import React from 'react';
import { Mail, MessageSquare, Users, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about SourceFoods? Want to volunteer or partner with us? 
            We'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-green-600" size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Email Us</h3>
            <p className="text-xl text-gray-600 mb-6">
              Ready to join our mission or have questions? Send us an email and we'll get back to you soon.
            </p>
            <a 
              href="mailto:hello@sourcefoods.org"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 text-lg gap-3"
            >
              hello@sourcefoods.org
              <ArrowRight size={24} />
            </a>
            <p className="text-gray-500 mt-4"></p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Volunteering</h4>
              <p className="text-sm text-gray-600">Join our team of passionate volunteers</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Partnerships</h4>
              <p className="text-sm text-gray-600">Collaborate with us on our mission</p>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Want to volunteer</h4>
              <p className="text-sm text-gray-600">We welcome remote volunteering!</p>
            </div>
          </div>

          {/* What to Include Section */}
          <div className="bg-green-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Include in Your Email</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">For Volunteers:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Your skills and experience</li>
                  <li>• Areas of interest (development, design, outreach)</li>
                  <li>• Time availability</li>
                  <li>• Why you want to join SourceFoods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;