export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-darkBlue fixed top-0 left-0 p-8 flex flex-col">
      <div className="text-white text-3xl font-bold mb-16">
        <div className="text-4xl">Kevin He</div>
        <div className="text-lg font-light">Schulich Leader 2023</div>
      </div>

      <div className="flex-grow flex items-center">
        <nav className="text-white space-y-8 text-center">
          <a
            href="#experience"
            className="block text-lg hover:underline transition-all duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block text-lg hover:underline transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-lg hover:underline transition-all duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
