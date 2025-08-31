import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function ExperienceItem({
  dates,
  title,
  company,
  description,
  skills,
  link,
  image,
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-gray-900/50 border border-gray-800 hover:border-white backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-white font-medium">
          {dates}
        </div>
        <div className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
          <ExternalLink size={18} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-20 flex-shrink-0">
          <img
            src={image}
            alt={`${company} logo`}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-contain bg-white/5 p-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white mb-4 font-medium">
            {company}
          </p>

          <div className="mb-6">
            {description.map((item, index) => (
              <p key={index} className="text-gray-400 leading-relaxed mb-2">
                • {item}
              </p>
            ))}
          </div>

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
    </a >
  );
}

export default ExperienceItem;