const skills = [
  // Languages
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Groovy", category: "Languages" },
  { name: "MVFLEX Expression Language", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Bash", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Backend
  { name: "Spring Boot", category: "Backend" },
  { name: "JPA/Hibernate", category: "Backend" },
  { name: "Executor Framework", category: "Backend" },
  { name: "Kafka & ActiveMQ", category: "Backend" },
  { name: "Microservices Architecture", category: "Backend" },
  { name: "Multithreading & Concurrency", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "FlyWay", category: "Backend" },
  { name: "Play Framework", category: "Backend" },
  { name: "Node.js", category: "Backend" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "JIRA", category: "Tools" },
  { name: "JMeter", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Eclipse MAT & JMC", category: "Tools" },
  { name: "DBeaver", category: "Tools" },
  { name: "VS Code, Eclipse, IntelliJ", category: "Tools" },
  { name: "Maven", category: "Tools" },
  // Testing
  { name: "Jest", category: "Testing" },
  { name: "junit and Mockito", category: "Testing" },
  { name: "jmeter for load/performance testing", category: "Testing" },
  { name: "Burp Suite", category: "Testing" },
  { name: "Playwright", category: "Testing" },
  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "NGINX", category: "DevOps" },
  { name: "AWS (EC2, Lambda, CloudWatch)", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
];

export default function Skills() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
