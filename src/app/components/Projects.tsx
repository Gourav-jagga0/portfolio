const projects = [
  {
    title: "Project 1",
    description: "A brief description of your project. What it does, technologies used, etc.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of your project. What it does, technologies used, etc.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of your project. What it does, technologies used, etc.",
    technologies: ["TypeScript", "GraphQL", "PostgreSQL"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.link} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="text-gray-700 hover:text-gray-900 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}