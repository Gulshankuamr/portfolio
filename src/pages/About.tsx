export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">About Me</h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
            I'm Gulshan Kumar, a React.js frontend developer and a Next.js enthusiast, currently interning at ByteUprise. 
            I’m passionate about building modern, responsive web applications with a strong focus on user experience and clean design.
          </p>

          <p className="text-lg text-gray-700">
            I specialize in React.js and have hands-on experience with frameworks like Next.js, Bootstrap, and Tailwind CSS. 
            I'm currently learning the MERN stack and continuously improving my skills in full-stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">MCA - Master of Computer Applications</h4>
                <p className="text-gray-600">Institute of Engineering & Technology, Dr. Ram Manohar Lohia Avadh University, Ayodhya</p>
                <p className="text-gray-500">2024 - 2025</p>
              </li>
              {/* <li>
                <h4 className="font-semibold">Intermediate (Mathematics)</h4>
                <p className="text-gray-600">Kisan Inter College, Ambedkar Nagar</p>
                <p className="text-gray-500">2017 - 2018 | CGPA: 6.5</p>
              </li> */}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">React.Js Frontend Developer Intern</h4>
                <p className="text-gray-600">ByteUprise</p>
                <p className="text-gray-500">Current</p>
                <p className="text-gray-500">January 2025 - Current</p>

              </li>
              {/* <li>
                <h4 className="font-semibold">Full Stack Developer Intern</h4>
                <p className="text-gray-600">Dotch Endeavours</p>
                <p className="text-gray-500">Sept 2023 - Nov 2023</p>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <div className="bg-white rounded-lg shadow-lg p-6 mt-8" data-aos="fade-up">
          <h3 className="text-xl font-bold mb-4">Projects</h3>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Calculator:</strong> A simple calculator app built using HTML, CSS, and JavaScript.</li>
            <li><strong>To-Do App:</strong> A task management web app with add/edit/delete features using HTML, CSS, and JS.</li>
            <li><strong>Tribute Page:</strong> A responsive tribute page made using HTML and CSS.</li>
            <li><strong>Amazon Front Page:</strong> Frontend replica of Amazon homepage using HTML and CSS.</li>
            <li><strong>Myntra UI Clone:</strong> Fully responsive clone using React.js, Bootstrap, and JS.</li>
            <li><strong>Video Call Chat App:</strong> Built using React.js, Next.js, and Tailwind CSS.</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
