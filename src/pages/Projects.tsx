
import calc from '../assets/1164913b4932faae0fe871859b01684b.gif';
import tribute from '../assets/book-60.gif.webp';
import todo from '../assets/Create a Responsive To-Do List App using HTML, CSS, and JavaScript.gif';
import videoCall from '../assets/Screenshot 2025-04-02 095140.png';
import myntra from '../assets/1ac8165da9c37e7281d056f32eed731f.gif';


const projects = [

  {
    title: 'Calculator',
    description: 'Simple and responsive calculator built using vanilla JS.',
    image: calc,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://calculator-tau-coral-18.vercel.app/',
    githubUrl: 'https://github.com/Gulshankumar1450',
  },
  {
    title: 'Tribute Page',
    description: 'A beautiful tribute page using pure HTML and CSS.',
    image: tribute,
    technologies: ['HTML', 'CSS'],
    demoUrl: 'https://github.com/Gulshankumar1450/tribute-page.html.css.git',
    githubUrl: 'https://github.com/Gulshankumar1450',
  },
  {
    title: 'To-Do App',
    description: 'Organize your tasks with this responsive To-Do App.',
    image: todo,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://to-do-app-rho-drab.vercel.app/',
    githubUrl: 'https://github.com/Gulshankumar1450',
  },
  {
    title: 'Video Call App',
    description: 'Video communication app using React and Tailwind CSS.',
    image: videoCall,
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js'],
    demoUrl: 'https://meet-vidchat-app-git-main-gulshan73939314-gmailcoms-projects.vercel.app/',
    githubUrl: 'https://github.com/Gulshankuamr/meet-vidchat-app.git',
  },
  {
    title: 'Myntra Website Clone',
    description: 'Responsive clone of Myntra e-commerce site.',
    image: myntra,
    technologies: ['HTML', 'Bootstrap', 'CSS', 'JavaScript', 'React.js'],
    demoUrl: 'https://to-do-app-rho-drab.vercel.app/',
    githubUrl: 'https://github.com/Gulshankumar1450',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
