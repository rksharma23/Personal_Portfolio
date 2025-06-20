import styles from "./AboutSection.module.css";
import profile from "../../assets/profile4.png";

function AboutSection() {
  return (
    <div className={styles.outerContainer} id="about" >
      <h1 className={styles.heading}>About Me</h1>
      <span className={styles.tagLine}>
        A brief introduction to my journey and passion for web development.
      </span>
      <div className={styles.innerContainer}>
        <div className={styles.userImage}>
          <img src={profile} alt="User-Image" />
        </div>
        <div className={styles.aboutMe}>
          <h2 className={styles.title}>
            Crafting Digital Experiences with Code
          </h2>
          <p className={styles.description}>
            Hello! I'm Roshan Kumar Sharma, a MERN stack web developer eager to
            transform innovative ideas into reality. With a solid foundation in
            both front-end and back-end technologies, I specialize in building
            dynamic, high-performance web applications that provide exceptional
            user experiences. My two industrial training certifications have
            equipped me with practical skills and a deep understanding of modern
            development workflows. I thrive on problem-solving and am constantly
            learning new technologies to deliver cutting-edge solutions.
          </p>
          <a href="./Roshan_Resume.pdf" download={true} ><button className={styles.cvBtn}>Download CV</button></a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
