import React from "react";
import styles from "./ProjectCards.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import projectsData from "./ProjectsData";

const ProjectCards = () => {
    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectHeading}>Proyectos</h1>
            <div className={styles.projectContainer}>
                {
                    projectsData.length ? projectsData.map((pro, index) => {
                        return (
                            <ProjectCard 
                                key={index}
                                img={pro.img}
                                title={pro.title}
                                text={pro.text}
                                view={pro.view}
                                source={pro.source}
                            />
                        )
                    }) : <h2>Cargando...</h2>
                }
            </div>
        </div>
    )
}

export default ProjectCards;