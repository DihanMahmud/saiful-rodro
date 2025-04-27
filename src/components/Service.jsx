import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Globe, Layout, Server, Wrench, Cpu } from "lucide-react"
import Link from "next/link"


const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies.",
    icon: <Globe className="h-8 w-8 text-white" />,
    skills: ["JavaScript (ES6)", "React", "Next.js", "Node.js", "Express.js"],
    pricing: {
      hourly: "$75",
      project: "From $5,000",
    },
  },
  {
    title: "Frontend Specialization",
    description: "Creating responsive and interactive user interfaces.",
    icon: <Layout className="h-8 w-8 text-white" />,
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Redux Toolkit"],
    pricing: {
      hourly: "$65",
      project: "From $3,000",
    },
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs.",
    icon: <Server className="h-8 w-8 text-white" />,
    skills: ["Node.js", "Express.js", "C++", "Go", "MongoDB", "PostgreSQL"],
    pricing: {
      hourly: "$80",
      project: "From $4,000",
    },
  },
  {
    title: "Database Management",
    description: "Designing and optimizing database solutions for various needs.",
    icon: <Database className="h-8 w-8 text-white" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"],
    pricing: {
      hourly: "$70",
      project: "From $2,500",
    },
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlining development processes and managing deployments.",
    icon: <Wrench className="h-8 w-8 text-white" />,
    skills: ["Git", "Docker", "CI/CD", "Microsoft Azure", "Vercel", "Netlify"],
    pricing: {
      hourly: "$85",
      project: "From $3,500",
    },
  },
  {
    title: "AI Integration",
    description: "Incorporating AI capabilities into software solutions.",
    icon: <Code2 className="h-8 w-8 text-white" />,
    skills: ["OpenAI", "Langchain", "Custom AI Solutions"],
    pricing: {
      hourly: "$100",
      project: "From $6,000",
    },
  },
  {
    title: "Microservices Architecture",
    description: "Designing and implementing scalable microservices-based systems.",
    icon: <Cpu className="h-8 w-8 text-white" />,
    skills: ["Go", "Node.js", "Docker", "Kubernetes", "API Gateway"],
    pricing: {
      hourly: "$90",
      project: "From $7,000",
    },
  },
]

export default function Service() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 pb-12 md:px-12 text-gray-100 pt-24" id="services">
      <div className="mx-auto">
      <h1 className="text-center uppercase text-2xl sm:text-4xl text-[#7CFC00] pb-7">Services & Pricing</h1>

        {/* <h2 className="text-3xl font-bold text-center mb-12">Our </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg transition-shadow duration-300 bg-[#222] border-gray-700"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl text-gray-100">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-200 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-gray-700 text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-200 mb-2">Pricing:</h4>
                  <p className="text-gray-300">Hourly: {service.pricing.hourly}</p>
                  <p className="text-gray-300">Project-based: {service.pricing.project}</p>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-white text-black hover:text-white">
                <Link href='mailto:dev-saiful@outlook.com' className="">Request Quote</Link></Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


