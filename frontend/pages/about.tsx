import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ];

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Your Company',
      period: '2023 - Present',
      description: 'Developing web applications using modern technologies and best practices.',
      icon: Code,
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      period: '2022 - 2023',
      description: 'Creating beautiful and user-friendly interfaces for web and mobile applications.',
      icon: Palette,
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Startup',
      period: '2021 - 2022',
      description: 'Building responsive web applications with React and modern CSS frameworks.',
      icon: Zap,
    },
  ];

  const achievements = [
    { title: 'Projects Completed', value: '50+', icon: Award },
    { title: 'Happy Clients', value: '25+', icon: Users },
    { title: 'Cups of Coffee', value: '1000+', icon: Coffee },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center"
          >
            <span className="text-4xl font-bold text-white">YN</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-friendly applications. I enjoy turning complex problems 
            into simple, elegant solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="btn-secondary flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into web development began during my computer science studies, 
                where I discovered my passion for creating digital experiences that make 
                a difference. What started as curiosity about how websites work has evolved 
                into a career dedicated to building applications that solve real-world problems.
              </p>
              <p>
                I specialize in full-stack development with a focus on modern JavaScript 
                frameworks, clean code architecture, and user-centered design. I believe 
                in the power of technology to create positive change and am always eager 
                to learn new tools and techniques.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm passionate about continuous learning and helping others grow in their 
                development journey.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-600" size={20} />
                <span className="text-gray-600">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-600" size={20} />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary-600" size={20} />
                <span className="text-gray-600">Your City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-primary-600" size={20} />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  github.com/yourusername
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-primary-600" size={20} />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-full">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">
                    {achievement.value}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {achievement.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="card p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="btn-primary"
            >
              Send me an email
            </a>
            <a
              href="/projects"
              className="btn-secondary"
            >
              View my work
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

