import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ title, description, imageUrl, projectLink, skills }) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <div className="bg-white md:bg-opacity-85 hover:bg-opacity-100 rounded-lg shadow-lg overflow-hidden flex transition-all transform hover:scale-105 cursor-pointer group">
        <div className="absolute top-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300">
          <ExternalLink size={20} />
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="w-1/3 object-cover hidden md:block"
        />
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
            <p className="text-black mb-4">{description}</p>
          </div>
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

export default ProjectCard;
