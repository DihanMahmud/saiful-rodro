'use client'
import { projects } from "@/data";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const router = useParams();
  
  const { slug } = router;

  const project = projects.find((p) => p.url === slug);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-5 pt-12">
      <h1 className="text-center text-2xl sm:text-4xl pb-7">{project.name}</h1>
      <div className="mb-6 flex justify-center gap-4">
        <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 p-3 bg-[#f8f8f8] rounded-md hover:bg-blue-500 hover:text-[#f8f8f8] transition-all">
          Live Demo
        </Link>
        <br />
        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 p-3 bg-[#f8f8f8] rounded-md hover:bg-blue-500 hover:text-[#f8f8f8] transition-all">
          GitHub Repo
        </Link>
      </div>
      <p>{project.description}</p>
      <h2 className="text-2xl pt-4">Features</h2>
      <ul className="list-disc pl-6">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

    </div>
  );
}
