import "./Projects.css";
import figmaproject from "../../assets/figmaproject.png";
import conceptsfrontproject from "../../assets/conceptsfrontendproject.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrapper">
        <div className="card">
          <div className="image"></div>
          <div className="description">
            <h3>Dashboard</h3>
            <p>This project demos real-time data, charts and events</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={conceptsfrontproject}></img>
          </div>
          <div className="description">
            <h3>Concepts Frontend</h3>
            <p>
              This project demos commonly used patterns like debouncing, lazy
              loading, codesplitting and easy for learning
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={figmaproject}></img>
          </div>
          <div className="description">
            <h3>Figma translation</h3>
            <p>
              This project shows translated functional responsive websites from
              figma templates
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image"></div>
          <div className="description">
            <h3>Component library</h3>
            <p>This project has storybook defintions for React UI components</p>
          </div>
        </div>
        <div className="card">
          <div className="image"></div>
          <div className="description">
            <h3>Portfolio website</h3>
            <p>
              I built my own portfolio website with React which you are watching
              live
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
