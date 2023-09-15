import { useState } from 'react';
import Story from "../Story";

function Portfolio() {

  //will need to make this hit the mongodb that holds the users stories

  // the array of stories will be replaced with the array of stories from the db
  
  const [projects] = useState([
    {
      name: 'surfReport',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'pastelPuzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'runBuddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'ledWall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Story
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
