import React from 'react';

const projectData = [
  {
    projectName: "Mappilahal",
    description: "'Mappila Haal' is an interactive virtual exhibition on 1921 Malabar rebellion.",
    projectImage: "https://play-lh.googleusercontent.com/IZaMlyoufj705lrByE23EvMg25RyyujPmQ-0igF9h61JZfmorlMNWi412zVzkQi-8grQ=w240-h480-rw",
    skills: ["React", "Oracle", "Flutter", "TailwindCss", "NodeJS"]
  },
  {
    projectName: "Muhasabah",
    description: "Muhasabah is a comprehensive Ihthisab App to get accurate prayer times, adhan time, azan alarm, recite the Holy Quran, and track your salat performance, dua, etc.",
    projectImage: "https://play-lh.googleusercontent.com/BVzWSapxIO_jLR-eXvnDaxZUIXJHYUyZ_hcgNCj212QrqXpw934a95NrQuc9zFcRbFI=w240-h480-rw",
    skills: ["Flutter", "Aws", "TailwindCss", "NodeJS"]
  },
  {
    projectName: "Mahsoorath",
    description: "This is a handbook prepared by Imam Hassan al-Banna for his members of the organization with the aim of cultivating the culture of Tazqiyyah, in which the whole of life is organized by the remembrance of Allah.",
    projectImage: "https://play-lh.googleusercontent.com/o2Tm7XyEiUJL6ML7xQ31AXNDgR085AiJashKH3q_8ZH6Ow59MU7Uwbcx5zapm8Ov0g=w240-h480-rw",
    skills: ["Oracle", "Flutter", "VueJs", "NodeJS"]
  }
];

function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 gap-4">
      {projectData.map((project, index) => (
        <div key={index} className="p-4 bg-white rounded shadow-md">
          {/* Project Image */}
          <img src={project.projectImage} alt={project.projectName} className="w-full h-48 object-cover rounded" />
          
          {/* Project Name */}
          <h3 className="mt-4 text-lg font-bold">{project.projectName}</h3>
          
          {/* Project Description */}
          <p className="text-sm text-gray-600 mt-2">{project.description}</p>
          
          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="bg-gray-200 px-2 py-1 text-xs rounded">
                {skill}
              </span>
            ))}
          </div>

          <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-full mt-5 cursor-pointer rounded-lg border-2  bg-black transition-all text-white  dark:text-white"
          >
        Contribute
          </button>
        </div>

        </div>
        
      ))}
  
    </div>
  );
}

export default ProjectList;
