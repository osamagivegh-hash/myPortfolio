import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onEdit?: (project: Project) => void;
  onDelete?: (projectId: string) => void;
}

const ProjectCard = ({ project, onEdit, onDelete }: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="card p-6 h-full flex flex-col"
    >
      {/* Video Preview */}
      {project.videoFilename && (
        <div className="mb-4 relative">
          {!showVideo ? (
            <div
              className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
              onClick={() => setShowVideo(true)}
            >
              <div className="text-center">
                <Play className="mx-auto mb-2 text-primary-600" size={48} />
                <p className="text-sm text-gray-600">Click to play demo</p>
              </div>
            </div>
          ) : (
            <video
              className="w-full aspect-video rounded-lg"
              controls
              onEnded={() => setShowVideo(false)}
            >
              <source src={`http://localhost:5000/videos/${project.videoFilename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mb-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Action Buttons */}
        {(onEdit || onDelete) && (
          <div className="flex gap-2 pt-2 border-t border-gray-200">
            {onEdit && (
              <button
                onClick={() => onEdit(project)}
                className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(project.id)}
                className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

