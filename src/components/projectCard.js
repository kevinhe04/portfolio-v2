import { ExternalLink } from "lucide-react";

function ProjectCard({ title, description, imageUrl, projectLink, skills }) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-gray-900/50 border border-gray-800 hover:border-white backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-700 group">
        <div className="flex items-start gap-4 p-6">
          {imageUrl && (
            <div className="relative flex-shrink-0">
              <img
                src={imageUrl}
                alt={title}
                className="w-20 h-20 object-cover rounded-lg bg-white/5 p-1"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 ml-2 flex-shrink-0">
                <ExternalLink size={18} />
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a >
  );
}

export default ProjectCard;