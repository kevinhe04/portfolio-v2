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
    <div className="group w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block backdrop-blur-sm rounded-xl p-4 transition-colors duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-md text-black">{company}</div>
          <div className="text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
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
            <h3 className="text-xl text-black font-bold group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{dates}</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-600 text-xs rounded-full border border-blue-500/30"
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
          {description.map((item, index) => (
            <p key={index} className="text-gray-500 leading-relaxed mb-2 last:mb-0 text-sm">
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;