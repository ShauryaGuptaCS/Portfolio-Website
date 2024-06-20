import { getImageUrl } from "../../utlis";
import skills from "../../data/skills.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div className={styles.experienceContainer} id="experience">
      <h1>Experience</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillBox}>
            <div className={styles.skillIcon}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <div className={styles.skillTitle}>{skill.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
