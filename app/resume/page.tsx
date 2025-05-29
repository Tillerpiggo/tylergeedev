import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Mail, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="bg-white border rounded-lg p-8 shadow-sm print:shadow-none print:border-none">
        <header className="mb-8 pb-8 border-b">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl text-neutral-600 mb-4">Full-Stack Developer</h2>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              <span>linkedin.com/in/yourusername</span>
            </div>
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1" />
              <span>github.com/yourusername</span>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Summary</h3>
          <p className="text-neutral-700">
            Passionate full-stack developer with 5+ years of experience building web applications with modern
            technologies. Specialized in React, Node.js, and cloud infrastructure. Committed to writing clean,
            maintainable code and creating exceptional user experiences.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Senior Full-Stack Developer</h4>
              <span className="text-neutral-600 text-sm">2021 - Present</span>
            </div>
            <div className="text-neutral-600 mb-2">TechCorp Inc.</div>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Led development of the company's flagship SaaS product, improving performance by 40%</li>
              <li>Architected and implemented microservices infrastructure using Node.js and Docker</li>
              <li>Mentored junior developers and established code review processes</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Full-Stack Developer</h4>
              <span className="text-neutral-600 text-sm">2018 - 2021</span>
            </div>
            <div className="text-neutral-600 mb-2">WebSolutions LLC</div>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Developed and maintained client websites and web applications</li>
              <li>Implemented responsive designs and ensured cross-browser compatibility</li>
              <li>Integrated third-party APIs and services</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Frontend Developer</h4>
              <span className="text-neutral-600 text-sm">2016 - 2018</span>
            </div>
            <div className="text-neutral-600 mb-2">DigitalCraft Agency</div>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Created responsive web interfaces using HTML, CSS, and JavaScript</li>
              <li>Collaborated with designers to implement pixel-perfect designs</li>
              <li>Optimized website performance and loading times</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Education</h3>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
              <span className="text-neutral-600 text-sm">2012 - 2016</span>
            </div>
            <div className="text-neutral-600">University of Technology</div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Frontend</h4>
              <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                <li>React, Next.js, Vue.js</li>
                <li>TypeScript, JavaScript (ES6+)</li>
                <li>HTML5, CSS3, Sass, Tailwind CSS</li>
                <li>Redux, Context API</li>
                <li>Jest, React Testing Library</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Backend</h4>
              <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                <li>Node.js, Express, NestJS</li>
                <li>Python, Django, Flask</li>
                <li>RESTful APIs, GraphQL</li>
                <li>MongoDB, PostgreSQL, MySQL</li>
                <li>Docker, Kubernetes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Projects</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Project Alpha</h4>
              <p className="text-neutral-700">A modern web application built with Next.js and TypeScript</p>
            </div>

            <div>
              <h4 className="font-medium">Data Visualizer</h4>
              <p className="text-neutral-700">Interactive data visualization tool using D3.js and React</p>
            </div>

            <div>
              <h4 className="font-medium">Mobile Companion</h4>
              <p className="text-neutral-700">Cross-platform mobile app built with React Native</p>
            </div>

            <div>
              <h4 className="font-medium">AI Assistant</h4>
              <p className="text-neutral-700">Natural language processing tool powered by machine learning</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
