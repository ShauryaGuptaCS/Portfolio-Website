    // import React from 'react'
    import projects from "../../data/projects.json";
    import { getImageUrl } from "../../utlis";
    import styles from "./Porjects.module.css";
    export const Projects = () => {
        return (
          <section className={styles.projectsSection} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, id) => (
                <div key={id} className={styles.projectBox}>
                  <img
                    src={getImageUrl(project.imageSrc)}
                    alt={`image of ${project.title}`}
                    className={styles.projectImage}
                  />
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <ul className={styles.skillsList}>
                    {project.skills.map((skill, skillId) => (
                      <li key={skillId} className={styles.skillItem}>{skill}</li>
                    ))}
                  </ul>
                  
                  <div className={styles.projectLinkContainer}>
                    {
                      project.source?
                      <a href={project.source} className={styles.projectLink}>Source Code</a>
                      : <a href={project.link} className={styles.projectLink}>SpaceX Frontend Clone Link</a>
                    }
                  </div>

                </div>
              ))}
            </div>
          </section>
        );
    };

