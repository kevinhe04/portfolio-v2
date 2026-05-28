import { ExternalLink } from "lucide-react";

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
        className="block rounded-xl p-4 transition-all duration-300 hover:bg-warm-100/50"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-md text-warm-700">{company}</div>
          <div className="text-warm-300 group-hover:text-accent transition-colors duration-300">
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
            <h3 className="text-xl text-warm-900 font-semibold group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-warm-400 text-sm mb-2">{dates}</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-warm-100 text-warm-600 text-xs rounded-full border border-warm-200"
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
        <div className="rounded-xl bg-warm-100/80 backdrop-blur-sm px-6 py-3">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-warm-500 leading-relaxed mb-2 last:mb-0 text-sm"
            >
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
