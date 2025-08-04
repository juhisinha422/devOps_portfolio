import React from 'react';
import { Cloud, Server, GitBranch, Shield, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Circle with Stats */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30 text-center">
                <div className="text-2xl font-bold text-blue-400">6+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 border border-green-500/30 text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-xs text-gray-400">Projects Deployed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30 text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-xs text-gray-400">Uptime SLA</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30 text-center">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </div>
            </div>

            {/* Main Profile Circle */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                <div className="w-72 h-72 bg-gray-900 rounded-full flex items-center justify-center border-4 border-white/20">
                  <div className="text-center">
                    <Cloud size={64} className="text-white mx-auto mb-4" />
                    <div className="text-white font-bold text-xl">DevOps</div>
                    <div className="text-blue-300 text-lg">Engineer</div>
                  </div>
                </div>
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Server size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <GitBranch size={24} className="text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <Shield size={16} className="text-white" />
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">AWS</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">Kubernetes</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30">Docker</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30">Azure DevOps</span>
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/30">Terraform</span>
              <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm border border-teal-500/30">Prometheus</span>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-white">Bhupendra Singh</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Chouhan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                Senior Cloud & DevOps Engineer
              </h2>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 mb-6 border border-blue-500/30">
                <p className="text-blue-300 font-semibold text-lg">6+ Years of Experience in IT Industry</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate Cloud & DevOps Engineer with 6+ years of experience specializing in building scalable infrastructure, 
              automating CI/CD pipelines, and optimizing cloud architectures. Expert in AWS, 
              Kubernetes, Docker, and modern DevOps practices with a focus on reliability and performance.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm text-white">bhups723@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm text-white">+91 8769560336</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm text-white">Udaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* Core Specializations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all">
                <Cloud className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                <h3 className="text-sm font-semibold text-gray-300">Cloud Architecture</h3>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-all">
                <GitBranch className="w-8 h-8 mx-auto text-green-400 mb-2" />
                <h3 className="text-sm font-semibold text-gray-300">CI/CD Pipelines</h3>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-all">
                <Server className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                <h3 className="text-sm font-semibold text-gray-300">Infrastructure</h3>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all">
                <Shield className="w-8 h-8 mx-auto text-orange-400 mb-2" />
                <h3 className="text-sm font-semibold text-gray-300">Security</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;