import styles from "./HeroSection.module.css";
import profile from '../../assets/profile_new.jpg'
function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <h1 className={styles.heading} >Roshan Sharma</h1>
      <h2 className={styles.tagLine} >Assosiate Systems Engineer @ IBM India</h2>
      <p className={styles.description} >
        Full Stack Developer building reliable systems from frontend to cloud—blending testing expertise, automation, and DevOps-driven practices.
      </p>
      <button className={styles.exploreBtn} onClick={()=>document.getElementById("projects")?.scrollIntoView()} >Explore My Work</button>
      <div className={styles.user_profile}>
        <img src={profile} alt="userProfile" />
      </div>
    </div>
  );
}

export default HeroSection;
