import React from 'react';
import { ExternalLink, Github, Server, Cloud, GitBranch, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Designed and implemented a hybrid cloud infrastructure platform spanning AWS and on-premises VMware environments, serving over 500 microservices with 99.99% uptime.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      technologies: ['AWS', 'VMware', 'Terraform', 'Kubernetes', 'Docker'],
      achievements: [
        'Reduced infrastructure costs by 40%',
        'Achieved 99.99% uptime SLA',
        'Automated 90% of deployment processes'
      ]
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines using AWS DevOps and GitHub Actions, implementing automated testing, security scanning, and deployment across multiple environments.',
      icon: <GitBranch className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      technologies: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Kubernetes', 'SonarQube'],
      achievements: [
        'Reduced deployment time from 4 hours to 15 minutes',
        'Implemented automated security scanning',
        '100% deployment success rate'
      ]
    },
    {
      title: 'Kubernetes Orchestration System',
      description: 'Architected and deployed production-grade Kubernetes clusters with advanced networking, monitoring, and security features for containerized applications.',
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus'],
      achievements: [
        'Orchestrated 200+ containerized services',
        'Implemented auto-scaling reducing costs by 30%',
        'Zero-downtime deployments'
      ]
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack providing real-time insights into system performance and health.',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Alertmanager', 'Jaeger'],
      achievements: [
        'Reduced MTTR by 60%',
        'Implemented proactive alerting',
        'Created 50+ custom dashboards'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of major infrastructure projects and DevOps implementations 
            that demonstrate expertise in modern cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-lg mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </button>
                <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
