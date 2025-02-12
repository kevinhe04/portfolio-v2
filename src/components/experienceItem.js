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
      className="block bg-white md:bg-opacity-85 hover:bg-opacity-100 text-black shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer group"
    >
      <div className="absolute top-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300">
        <ExternalLink size={20} />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 text-center md:text-left flex flex-col">
          <p className="font-semibold">{dates}</p>
          <div className="flex-1 flex items-center justify-center">
            <img src={image} className="rounded-2xl"></img>
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="mb-4">{company}</p>
          <ul className="list-disc list-inside mb-4">
            {description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pointer-events-none">
            {skills.map((skill) => (
              <Badge key={skill} className="bg-blue-100 text-blue-800">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ExperienceItem;
