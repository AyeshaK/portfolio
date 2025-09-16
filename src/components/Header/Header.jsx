import "./Header.css";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <header>
      <Nav />
      <div className="wrapper">
        <div className="description">
          <h1>Hi, I am Ayesha Karim</h1>
          <h2 className="secondary_heading">Frontend Developer</h2>
          <p>
            I build high-performance, scalable and responsive web applications
            in React, Javascript and Typescript
          </p>
          <p>
            You can view some of my projects from here and their github links
          </p>
          <p>
            <a href="https://github.com/AyeshaK" target="_blank" class="btn">
              <button>View Github</button>
            </a>
          </p>
        </div>
        {/* <div className="skills-wrapper">
          <div>
            <h2>Skills</h2>
          </div>
          <div className="skills">
            <div className="tag">React</div>
            <div className="tag">Typescript</div>
            <div className="tag">Javascript</div>
            <div className="tag">Playwright</div>
            <div className="tag">Redux</div>
            <div className="tag">Jest</div>
            <div className="tag">HTML5</div>
            <div className="tag">CSS3</div>
            <div className="tag">Storybook</div>
            <div className="tag">Git</div>
            <div className="tag">GitHub</div>
            <div className="tag">Webpack</div>
            <div className="tag">Vite</div>
            <div className="tag">Tailwind</div>
          </div>
        </div> */}
      </div>
    </header>
  );
};
export default Header;
