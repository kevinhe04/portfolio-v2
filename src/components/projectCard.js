import { ExternalLink } from "lucide-react";

function ProjectCard({ title, description, imageUrl, projectLink, skills, dates }) {
  return (
    <div className="group">
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block backdrop-blur-sm rounded-xl p-4 transition-colors duration-300"
      >
        <div className="flex items-start gap-4">
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
              <h3 className="text-xl text-black group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <div className="text-gray-300 group-hover:text-blue-600 transition-colors duration-300 ml-2 flex-shrink-0">
                <ExternalLink size={18} />
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4">{dates}</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-600 text-sm rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </a>

      <div
        className="max-h-0 overflow-hidden opacity-0 -translate-y-1 pointer-events-none transition-all duration-300 ease-out group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-3 group-hover:pointer-events-auto"
        aria-hidden="true"
      >
        <div className="rounded-xl bg-white/60 backdrop-blur-sm px-6 py-3">
          <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;