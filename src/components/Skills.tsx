import React from 'react';
import { 
  Cloud, 
  GitBranch, 
  Container, 
  Server, 
  Monitor, 
  Database,
  Zap,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'EC2 & ECS', level: 90 },
        { name: 'S3 & CloudFront', level: 88 },
        { name: 'Lambda & API Gateway', level: 85 },
        { name: 'RDS & DynamoDB', level: 82 },
        { name: 'IAM & Security', level: 90 }
      ]
    },
    {
      title: 'CI/CD & Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'AWS DevOps', level: 92 },
        { name: 'GitHub Actions', level: 88 },
        { name: 'Jenkins', level: 85 },
        { name: 'Git & GitFlow', level: 95 },
        { name: 'Pipeline Automation', level: 90 }
      ]
    },
    {
      title: 'Containerization & Orchestration',
      icon: <Container className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Kubernetes', level: 85 },
        { name: 'Docker', level: 92 },
        { name: 'Helm Charts', level: 82 },
        { name: 'Container Security', level: 80 },
        { name: 'Microservices', level: 87 }
      ]
    },
    {
      title: 'Infrastructure & Systems',
      icon: <Server className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Linux Administration', level: 90 },
        { name: 'VMware vSphere', level: 85 },
        { name: 'Terraform', level: 88 },
        { name: 'Ansible', level: 82 },
        { name: 'Networking', level: 85 }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 90 },
        { name: 'ELK Stack', level: 85 },
        { name: 'CloudWatch', level: 87 },
        { name: 'Alerting & SLA', level: 85 }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'DevSecOps', level: 85 },
        { name: 'Security Scanning', level: 82 },
        { name: 'Compliance (SOC2)', level: 80 },
        { name: 'Vulnerability Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning cloud infrastructure, DevOps practices, 
            and modern deployment technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
