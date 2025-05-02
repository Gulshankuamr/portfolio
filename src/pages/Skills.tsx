const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 75 },
      { name: 'Next.js', level: 50 },
      { name: 'JavaScript (ES6+)', level: 60 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 90 },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'MongoDB (Basic)', level: 40 },
      { name: 'MySQL (Basic)', level: 40 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 50 },
      { name: 'VS Code', level: 85 },
      { name: 'Postman', level: 75 },
      { name: 'WordPress', level: 60 },
      { name: 'Figma', level: 40 },
      { name: 'Netlify', level: 30 },
      { name: 'Windows OS', level: 60 },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'C', level: 50 },
      { name: 'C++', level: 40 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Skills & Expertise
        </h2>

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div
              key={category.category}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
