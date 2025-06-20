import styles from "./ProjectSection.module.css";
import ProjectCard from "../Cards/ProjectCard.jsx";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

function AboutSection() {
  const sampleCards = [
    {
      image: project1,
      title: "Delight Food Delivery App",
      description:
        " Amodern web application developed using the MERN stack, offering a seamless experience with intuitive UI/UX design and robust backend functionality for managing food deliveries",
      tags: ["React", "JavaScript", "ModuleCSS", "Web Dev", "Frontend"],
      buttonText: "Explore",
      projectLink: "https://rksharma23.github.io/Delight-Food-Delivery-Frontend/"
    },
    {
      image: project2,
      title: "Quick Lists",
      description:
        " Engineered ’Quick List,’ an intuitive MERN stack to-do app that boasts advanced login/signup functionality via JWT, multiuser capabilities, robust password security with bcrypt, and a beautifully responsive layout.",
      tags: ["React", "JWT", "MongoDB", "Express", "NodeJS"],
      buttonText: "Explore",
      projectLink: "https://github.com/rksharma23/QuickListFrontend"
    },
    {
      image: project3,
      title: "Weather Application",
      description:
        " My-Weather-App is a sleek and intuitive weather forecasting application that provides real-time updates, detailed weather conditions, and location-based forecasts, all wrapped in a user-friendly interface. Stay prepared with accurate weather insights on the go!",
      tags: ["HTML", "CSS", "JS"],
      buttonText: "Explore",
      projectLink: "https://rksharma23.github.io/My-Weather-App/"
    },
    {
      image: project4,
      title: "Personal Portfolio",
      description:
        "Unlock the power of data with modern analytics tools and machine learning techniques to drive business insights.",
      tags: ["React", "ModuleCSS", "Design"],
      buttonText: "Explore",
      projectLink: "/"
    },
  ];

  return (
    <div className={styles.outerContainer} id="projects" >
      <h1 className={styles.heading}>My Projects</h1>
      <span className={styles.tagLine}>
        Showcasing a selection of my recent full-stack development work.
      </span>
      <div className={styles.innerContainer}>
        {sampleCards.map((card, index) => (
          <ProjectCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tags={card.tags}
            buttonText={card.buttonText}
            projectLink={card.projectLink}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
