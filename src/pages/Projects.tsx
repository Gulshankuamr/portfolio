import React, { useState, useEffect } from 'react';
import calc from '../assets/1164913b4932faae0fe871859b01684b.gif';
import tribute from '../assets/book-60.gif.webp';
import todo from '../assets/Create a Responsive To-Do List App using HTML, CSS, and JavaScript.gif';
import videoCall from '../assets/Screenshot 2025-04-02 095140.png';
import myntra from '../assets/1ac8165da9c37e7281d056f32eed731f.gif';

const defaultProjects = [
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
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: [],
    demoUrl: '',
    githubUrl: '',
  });
  const [techInput, setTechInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('myProjects'));
    if (saved) {
      setProjects([...defaultProjects, ...saved]);
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  const handleTechAdd = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()],
      });
      setTechInput('');
    }
  };

  const handleTechDelete = (tech) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech),
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProjects = [...projects];
    if (editIndex !== null) {
      newProjects[editIndex] = formData;
    } else {
      newProjects.push(formData);
    }

    setProjects(newProjects);
    localStorage.setItem('myProjects', JSON.stringify(newProjects.slice(defaultProjects.length)));
    resetForm();
  };

  const handleEdit = (index) => {
    setFormData(projects[index]);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
    localStorage.setItem('myProjects', JSON.stringify(updated.slice(defaultProjects.length)));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: [],
      demoUrl: '',
      githubUrl: '',
    });
    setTechInput('');
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        {/* Add Project Form */}
        <div className="bg-gray-100 p-6 mb-12 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            {editIndex !== null ? '✏️ Edit Project' : '➕ Add Your Project'}
          </h3>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Project Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
              className="p-2 border rounded"
            />
            <div className="md:col-span-2 flex flex-wrap gap-2 items-center">
              <input
                type="text"
                placeholder="Add Technology (e.g. React)"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="p-2 border rounded flex-1"
              />
              <button type="button" onClick={handleTechAdd} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Add Tech
              </button>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-2">
              {formData.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {tech}
                  <button onClick={() => handleTechDelete(tech)} className="text-red-500 font-bold">❌</button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Live Demo URL"
              value={formData.demoUrl}
              onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={formData.githubUrl}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              required
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              className="p-2 border rounded md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {editIndex !== null ? 'Update Project' : 'Add Project'}
            </button>
          </form>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title + index}
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
                <div className="flex space-x-4 mb-3">
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
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-sm text-yellow-600 hover:underline"
                  >
                     Edit
                  </button>
                  {index >= defaultProjects.length && (
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-sm text-red-600 hover:underline"
                    >
                       Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
