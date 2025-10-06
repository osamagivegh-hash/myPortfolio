import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Github, Linkedin, ArrowRight, Code, Palette, Zap } from 'lucide-react';

export default function Home() {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Tailwind CSS, Framer Motion' },
    { name: 'Backend Development', icon: Zap, description: 'Node.js, Express, APIs' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary-600">Your Name</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 btn-primary"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 btn-secondary"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/projects" className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-3">
              <span>View My Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* About Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="card p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            I'm a passionate developer with a love for clean code, beautiful design, and innovative solutions. 
            I enjoy working on projects that make a difference and constantly learning new technologies to stay ahead of the curve.
          </p>
          <Link href="/about" className="btn-primary">
            Learn More About Me
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}

