import styles from "./HeroSection.module.css";
import profile from '../../assets/profile_new.jpg'
function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <h1 className={styles.heading} >Roshan Sharma</h1>
      <h2 className={styles.tagLine} >MERN Stack Web Developer</h2>
      <p className={styles.description} >
        Passionate about building robust and scalable web applications with a
        keen eye for modern design and seamless user experiences.
      </p>
      <button className={styles.exploreBtn} onClick={()=>document.getElementById("projects")?.scrollIntoView()} >Explore My Work</button>
      <div className={styles.user_profile}>
        <img src={profile} alt="userProfile" />
      </div>
    </div>
  );
}

export default HeroSection;
