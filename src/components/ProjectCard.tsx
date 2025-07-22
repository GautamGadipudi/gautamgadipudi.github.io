interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({ title, description, githubUrl, liveUrl, technologies }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-medium text-sm"
          >
            GitHub →
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 font-medium text-sm"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
