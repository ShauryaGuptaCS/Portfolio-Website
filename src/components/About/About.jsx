import styles from "./About.module.css";
import { getImageUrl } from "../../utlis";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As an expert in the React library, I specialize in creating
                dynamic and scalable websites, delivering seamless user
                experiences with modern, interactive interfaces. My proficiency
                in JavaScript and React ensures efficient and robust frontend
                solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Skilled in backend development with a focus on JavaScript
                technologies, I build reliable and scalable server-side
                applications. Leveraging frameworks like Node.js, I ensure
                secure and efficient data management and API integrations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem solving</h3>
              <p>
                Problem Solving Description Adept at problem-solving, I excel in
                identifying and resolving complex technical challenges through
                innovative and efficient solutions. My analytical skills and
                experience enable me to debug and optimize code effectively,
                ensuring high performance and reliability in all projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
