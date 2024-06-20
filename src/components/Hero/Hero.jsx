// src/components/Inside/Inside.jsx
// import React from 'react';
import { getImageUrl } from "../../utlis";
import style from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}> Hii , I am Shaurya Gupta</h1>
        <p className={style.description }>
          Experienced in React and Node.js with strong problem-solving skills.
          Proficient in data structures, algorithms, MySQL, OOPs, DBMS, and
          computer networks. Dedicated to leveraging technical expertise to
          build robust and efficient software solutions..
        </p>
        <a href="mailto:as.shauryagupta@gmail.com" className={style.contactbtn}>Contact Me</a>
        </div>  
        <img src={getImageUrl("hero/newheroImage.jpg")} alt="hero image " className={style.heroImg}></img>
        <div className={style.topblur}/>
        <div className={style.bottomblur}/>
      
    </section>
  );
};
