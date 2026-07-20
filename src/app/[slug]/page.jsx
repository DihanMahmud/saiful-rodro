'use client'
import { projects } from "@/data";
import { ArrowLeft, ExternalLink, Github, User, Key, Shield  } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const router = useParams();
  const navigate = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const { slug } = router;

  const project = projects.find((p) => p.url === slug);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!project) {
    return <div className="text-ink text-center py-10">Project not found!</div>;
  }

  return (
    <div className={`max-w-screen-lg mx-auto px-5 py-12 text-ink transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={() => navigate.back()}
        className="mb-4 px-4 py-2 bg-surface rounded-md hover:bg-surface-2 transition-all flex items-center justify-center gap-1"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-center text-4xl sm:text-5xl pb-7 font-bold">{project.name}</h1>
      <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-blue-500 rounded-md hover:bg-blue-600 transition-all text-center w-full sm:w-auto">
          <ExternalLink size={16} /> Live Demo
        </Link>
        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-surface rounded-md hover:bg-surface-2 transition-all text-center w-full sm:w-auto">
          <Github size={16} /> GitHub Repo
        </Link>
      </div>
      <p className="mb-6 text-lg">{project.description}</p>
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <ul className="list-disc pl-6 mb-6 text-lg">
        {project.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.user && (
          <div className="bg-surface p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <User size={24} /> User Credentials
            </h2>
            <p className="flex items-center gap-2"><User size={16} /> <strong>Email:</strong> {project.user.email}</p>
            <p className="flex items-center gap-2"><Key size={16} /> <strong>Password:</strong> {project.user.password}</p>
          </div>
        )}
        {project.admin && (
          <div className="bg-surface p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield size={24} /> Admin Credentials
            </h2>
            <p className="flex items-center gap-2"><User size={16} /> <strong>Email:</strong> {project.admin.email}</p>
            <p className="flex items-center gap-2"><Key size={16} /> <strong>Password:</strong> {project.admin.password}</p>
          </div>
        )}
      </div>
    </div>
  );
}
