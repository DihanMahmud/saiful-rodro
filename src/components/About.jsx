
export default function About() {
  return (
    <div id="about" className="max-w-screen-2xl bg-[#333] mx-auto px-6 md:px-12 py-24 md:py-32">
        <h1 className=" uppercase text-4xl sm:text-7xl text-[#7CFC00] pb-7">About</h1>
        <div className=" flex gap-3 ">
            <div className=" h-fit">
              <div className="h-1 w-5 sm:w-20 bg-[#7CFC00] mt-2 rounded-sm"></div>
            </div>
            <div className="w-full pr-0 sm:pr-10 text-justify">
            <p>I am Saiful Islam, a Software Developer with a focus on building scalable and efficient backend systems. I hold a BSc in Computer Science and Engineering from Sonargaon University, where I achieved a CGPA of 3.87. I have experience working with JavaScript, Node.js, and C++, along with frameworks like Express and Prisma. My expertise includes building REST APIs and working with GraphQL, while specializing in databases like PostgreSQL and MongoDB. I’m also proficient in cloud platforms such as AWS, Azure, and Render, and skilled in Docker, CI/CD pipelines, Git, and GitHub. Additionally, I use tools like Postman for API testing and have explored advanced technologies like the OpenAI API and Langchain.</p>
            </div>
        </div>
    </div>
  )
}
