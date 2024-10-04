import Icon from "./Icon";

const skills = [
  { name: "Azure", icon: "/azure.svg" },
  { name: "C++", icon: "/cpp.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Express", icon: "/express.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
  { name: "Postman", icon: "/postman.svg" },
  { name: "Prisma", icon: "/prisma.svg" },
];

export default function Skills() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 pt-12 md:px-12">
      <h1 className="text-center uppercase text-4xl sm:text-7xl text-[#7CFC00] pb-7">My Skills</h1>
      <div className="flex flex-col justify-center items-center gap-6">
        {Array.from({ length: Math.ceil(skills.length / 5) }).map((_, index) => (
          <div key={index} className="flex gap-7 lg:flex-nowrap flex-wrap justify-center">
            {skills.slice(index * 5, index * 5 + 5).map((skill, skillIndex) => (
              <Icon key={skillIndex} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
