import styles from "./SkillSection.module.css";
import SkillCard from '../Cards/SkillCard';
import { FaCode } from "react-icons/fa6";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongodb, SiCss3 } from "react-icons/si";
import { LuPenTool } from "react-icons/lu";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

function SkillSection() {


    const skills = [
        {
            icon: FaCode,
            skill: "HTML5"
        },
        {
          icon: SiCss3,
          skill: "CSS3"
        },
        {
          icon: RiJavascriptFill,
          skill: "JavaScript"
        },
        {
          icon: FaReact,
          skill: "React.js"
        },
        {
          icon: IoLogoNodejs,
          skill: "Node.js"
        },
        {
          icon: SiExpress,
          skill: "Express.js"
        },
        {
          icon: SiMongodb,
          skill: "MongoDB"
        },
        {
          icon: LuPenTool,
          skill: "Rest APIs"
        },
        {
          icon: FaGitAlt,
          skill: "Git"
        },
        {
          icon: BiLogoCPlusPlus,
          skill: "C++"
        }
    ]

  return (
    <div className={styles.outerContainer} id="skills" >
      <h1 className={styles.heading}>My Skills</h1>
      <span className={styles.tagLine}>
        My technical toolkits and competencies.
      </span>
      <div className={styles.innerContainer}>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            skill={skill.skill}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
