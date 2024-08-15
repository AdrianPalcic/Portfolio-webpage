import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function About({theme}) {
    const placeholder = "Search About";

    const data = [
        {
            title: "Završena Srednja škola tehničara za Računalstvo",
            desc: "SŠPRV",
            where: "Senj, Croatia",
            when: "2018",
            stack: ["Osnovno znanje računarstva"],
            row: "row",
        },
        {
            title: "FreeCodeCamp Responsive Web Design Certification",
            desc: "FCC",
            where: "Online",
            when: "20.03.2024",
            stack: ["HTML", "CSS"],
            row: "row reverse",
        },
        {
            title: "FreeCodeCamp JavaScript Algorithms and Data Structures (Beta) Certification",
            desc: "FCC",
            where: "Online",
            when: "15.05.2024",
            stack: ["JavaScript"],
            row: "row",
        },
        {
            title: "FreeCodeCamp Front End Development Libraries Certification",
            desc: "FCC",
            where: "Online",
            when: "08.08.2024",
            stack: ["React", "Redux", "Bootstrap", "JQuery", "SaSS"],
            row: "row reverse",
        }
    ];
    
    const [filteredData, setFilteredData] = useState(data);

    const showAbout = (about) => {
        if (about.length === 0) {
            return (
                <div className="filter-error">
                    <h2>&lt;/&gt;</h2>
                    <h2>Could not find anything</h2>
                </div>
            );
        }

        return about.map((a) => (
            <div className={a.row} key={a.title}>
                <div className="about-card">
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                    <p className="about where"><i className="fa-solid fa-location-dot"></i> {a.where}</p>
                    <p className="about when">{a.when}</p>
                    <div className="about-stack">
                        {a.stack.map((s) => (
                            <p key={s}>{s}</p>
                        ))}
                    </div>
                </div>
            <div className="dot">
                <i className="fa-solid fa-circle"></i>
                <div className="line"></div>
            </div>
            </div>
        ));
    };

    const filterWithSearchBar = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = data.filter((d) =>
            d.title.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    return (
        <div className={`about-body ${theme ? "dark" : "light"}`}>
            <h1>About</h1>
            <SearchBar holder={placeholder} filter={filterWithSearchBar} />
            <div className="about-container">
                {showAbout(filteredData)}
            </div>
        </div>
    );
}

export default About;
