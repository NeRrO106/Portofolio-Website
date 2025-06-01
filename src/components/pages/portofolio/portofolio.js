import React, {useState} from "react";
import "./portofolio.css";
import projects from '../../../projects.json';

const Portofolio = () => {

  const [filteredProject, setFilteredProjects] = useState(projects);

  const handleFilter = (technology) =>{
    if(technology === "All") {
      setFilteredProjects(projects);
    }
    else{
      const filtered = projects.filter((projects) =>
        Array.isArray(projects.technologies) ? projects.technologies.includes(technology) : projects.technologies === technology
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-custom-dropdown dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("C")}>
              C
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("C++")}>
              C++
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("C#")}>
              C#
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("Java")}>
              Java
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("Python")}>
              Python
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("Unity")}>
              Unity
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("FullStack")}>
              FullStack
            </button>
          </li>
          <li>
            <button className="btn btn-custom-dropdown" onClick={() => handleFilter("Frontend")}>
              Frontend
            </button>
          </li>
        </ul>
      </div>
      <div className="project-list">
        {filteredProject.map((project) =>(
          <div key={project.id} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {Array.isArray(project.technologies) ? project.technologies.join(", ") : project.technologies}
              </p>
              {
                Array.isArray(project.link) ? (
                  project.link.map((link, index) =>(
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                      View Project {`Link ${index + 1}`}
                    </a>
                  ))
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )
              }
            </div>
        ))}
      </div>
    </div>
  );
};
export default Portofolio;
