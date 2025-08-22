import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your next DevOps project or cloud infrastructure needs? 
            Let's talk about how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-blue-400">jsinha1199@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-blue-400">+91 1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-purple-500 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-blue-400">Patna, Bihar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect Online</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-4 rounded-lg hover:bg-blue-600 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Download Resume */}
            <div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Juhi Sinha. Built with modern DevOps practices and deployed on AWS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
