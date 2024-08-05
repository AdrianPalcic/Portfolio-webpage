import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

    function Projects({ theme, func }) {


        const data = [
            {
                project: "Zadnja pošta Soljani",
                desc: "Digital collection of Poetry",
                text : "Zadnja pošta Soljani je debi zbirka poezije Josipa Capjaka. Istražuje teme domoljublja, ljubavi, prirode i vjere s jedinstvenim i emotivnim izrazom. ",
                tech : ["HTML", "CSS"],
                github : "https://github.com/AdrianPalcic/Soljani",
                when : "02.08.2024",
            },
            {
                project: "Drum Machine",
                desc: "FCC Front-end Libraries project",
                text:"A simple drum machine kit made with React.js",
                tech : ["React", "CSS"],
                github: "https://github.com/AdrianPalcic/FCC-DrumMachine",
                when: "sometimes",
            },
            {
                project: "Markdown",
                desc: "FCC Front-end Libraries project",
                text: "Markup project that allows the user to edit the text inside the mardown preview",
                tech: ["React", "CSS"],
                github: "https://github.com/AdrianPalcic/FCC-markdown",
                when: "sometimes",

            },
            {
                project: "Calculator",
                desc: "FCC Front-end Libraries project",
                text: "A simple calculator app with some bugs to be fixed",
                tech: ["React", "CSS"],
                github: "https://github.com/AdrianPalcic/FCC-calculator",
                when: "sometimes",
            },
            {
                project: "Portfolio",
                desc: "Personal portfolio website",
                text: "A portfolio website made with React.js",
                tech: ["React", "CSS"],
                github: "https://github.com/AdrianPalcic/Portfolio-webpage",
                when: "sometimes",
            },
            {
                project: "Web Shop",
                desc: "A webshhop app for my buddy",
                text: "A plant web shop with a shopping cart made in vanilla Javascript",
                tech: ["HTML", "CSS", "Javascript"],
                github: "https://github.com/AdrianPalcic/Web-shop",
                when: "sometimes"
            }
        ]

        const [filteredProjects, setFilteredProjects] = useState(data);

        const showProjects = (projects) => {

            if (projects.length === 0) {
                return <div className="filter-error">
                    <h2>&lt;/&gt;</h2>
                        <h2>Could not find anything</h2>
                          </div>
            }

            return projects.map((project) => (
                <div key={project.github} className="card">
                    <h3>{project.project}</h3>
                    <p>{project.desc}</p>
                    <div className="card-desc">
                        <p>{project.text}</p>
                    </div>
                    <div className="card-tech">
                        {project.tech.map((tech) => (
                            <p key={tech} className={`${tech}`}>{tech}</p>
                        ))}
                    </div>
                    <div className="card-bottom">
                        <p>{project.when}</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            ));
        };
    


        const filterWithSearchBar = (e) => {
            const searchValue = e.target.value.toLowerCase();
            const filteredData = data.filter((p) =>
                p.project.toLowerCase().includes(searchValue)
            );
            setFilteredProjects(filteredData);
        };





        return (
            <div className="projects-body">
            <h1>Projects</h1>
            <SearchBar filter={filterWithSearchBar}/>
            <div className="card-container">
                {showProjects(filteredProjects)}
            </div>
            </div>
        )
    }

    export default Projects;
  