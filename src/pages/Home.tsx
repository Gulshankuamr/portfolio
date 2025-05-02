import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Gulshan Kumar</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate Frontend Developer based in Lucknow, India — dedicated to building modern, responsive, and user-friendly web interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <button
              onClick={toggleDetails}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View My Details
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
            alt="Developer"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>

      {showDetails && (
        <div className="mt-12 max-w-4xl text-left space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold">Introduction to <span className="text-blue-600">GULSHAN KUMAR</span></h1>
          <p>Hello, my name is <strong>Gulshan Kumar</strong>, and I am currently pursuing a Master’s in Computer Applications (MCA) at Dr. Ram Manohar Lohia Avadh University in Ayodhya. I’m in my second year, and my passion for technology, especially in the field of software development and web technologies, continues to grow each day. I am eager to expand my knowledge and skills in areas such as web development, frontend engineering, and the MERN stack.</p>

          <h2 className="text-2xl font-semibold">Educational Background</h2>
          <p>I am pursuing my MCA degree to gain an in-depth understanding of computer science principles. I have taken courses in software engineering, data structures, algorithms, and database management. This coursework has enabled me to develop strong technical skills, which I am eager to apply in practical settings.</p>
          <p><strong>Current Degree:</strong> Master of Computer Applications (MCA)</p>
          <p><strong>University:</strong> Dr. Ram Manohar Lohia Avadh University</p>
          <p><strong>Year:</strong> Second Year</p>
          <p><strong>Specialization:</strong> Software Development, Web Development</p>
          <p>I am also highly invested in learning modern web technologies and tools. Currently, I am working on a project using Next.js with Tailwind CSS for the frontend. I’m adding responsiveness to it without removing existing styles or classes, and I am passionate about maintaining clean and efficient code.</p>

          <h2 className="text-2xl font-semibold">Professional Experience</h2>
          <p>Along with my academic journey, I am gaining practical experience by working as a Frontend Intern at ByteUprise, a company that specializes in cutting-edge technology solutions. In my role, I am enhancing my skills in frontend web development, particularly working with React.js, Next.js, and CSS frameworks like Tailwind CSS.</p>
          <p>Working in a dynamic team at ByteUprise has helped me hone my problem-solving abilities and deepen my understanding of web development. I actively collaborate with senior developers and contribute to live projects, ensuring the user interface (UI) is seamless and visually appealing.</p>
          <p><strong>Internship Role:</strong> Frontend Developer</p>
          <p><strong>Company:</strong> ByteUprise</p>
          <p><strong>Skills Applied:</strong> React.js, Next.js, Tailwind CSS, Git Version Control</p>

          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <p><strong>Frontend Technologies:</strong> HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS</p>
          <p><strong>Backend Technologies:</strong> Node.js, Express.js, MongoDB (MERN Stack)</p>
          <p><strong>Version Control:</strong> Git</p>
          <p><strong>Database Management:</strong> MySQL, MongoDB</p>
          <p><strong>Operating Systems:</strong> Windows, Linux</p>

          <h2 className="text-2xl font-semibold">Current Projects</h2>
          <p><strong>Company Project at ByteUprise:</strong> I am currently working on a web application for ByteUprise using React.js and Next.js. This project involves developing a fully responsive user interface and integrating third-party APIs to display real-time data.</p>
          <p><strong>Personal Project - Weather App:</strong> I am also working on a personal project — a weather app built with JavaScript, which fetches real-time data from an external API. This app allows users to check weather forecasts for their location, adding a functional touch to my knowledge of APIs.</p>

          <h2 className="text-2xl font-semibold">Academic Projects</h2>
          <p><strong>Document Management System (MATLAB):</strong> Designed and implemented a document management system using MATLAB, with search functionalities and efficient structure.</p>
          <p><strong>Student Fees Management System (MATLAB):</strong> Built a system for fee tracking and student record management using MATLAB.</p>

          <h2 className="text-2xl font-semibold">Goals and Aspirations</h2>
          <ul className="list-disc pl-6">
            <li>Finish my MCA program with distinction.</li>
            <li>Gain more hands-on experience in React.js and MERN stack development.</li>
            <li>Contribute to open-source projects to further improve my coding skills.</li>
            <li>Become a full-stack developer and work on large-scale web applications.</li>
            <li>Join a global tech company and take on leadership roles in development.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Soft Skills and Strengths</h2>
          <p><strong>Strong Analytical Skills:</strong> Ability to break down complex problems into manageable components.</p>
          <p><strong>Adaptability:</strong> Quick to learn new tools and technologies.</p>
          <p><strong>Team Collaboration:</strong> Comfortable working in both independent and team settings.</p>
          <p><strong>Time Management:</strong> Capable of prioritizing tasks and meeting deadlines efficiently.</p>

          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>I am passionate about learning and growing in the field of web development. I am always looking for opportunities to learn new technologies, collaborate with others, and contribute to exciting projects. I am excited to continue my journey in technology, where I can leverage my skills and passion to make a meaningful impact.</p>
          <p>Please feel free to contact me if you have any questions or would like to discuss potential collaborations or opportunities.</p>

          <p><strong>Name:</strong> Gulshan Kumar</p>
          <p><strong>Email:</strong> gulshan73939314@gmail.com</p>
          <p><strong>Phone:</strong> 7393931450</p>
        </div>
      )}
    </div>
  );
}
