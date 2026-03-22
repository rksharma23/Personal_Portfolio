import styles from "./ServicesSection.module.css";
import ServicesCard from "../Cards/ServiceCard";
import { FaCode, FaDatabase } from "react-icons/fa6";
import { SiSelenium } from "react-icons/si";
import { TbApi } from "react-icons/tb";


function ServicesSection() {
  const services = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience."
    },
    {
      icon: TbApi,
      title: "Backend API Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user engagement and drive business results."
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: FaCode,
      title: "UI/UX Implementation",
      description: "Responsive mobile-first applications that work seamlessly across all devices and platforms."
    },
    {
      icon: SiSelenium,
      title: "Automation",
      description: "Automation frameworks using Selenium and IQP to ensure efficient, scalable, and reliable testing. Reducing manual effort, improving test coverage, and accelerating release cycles with high-quality results."
    }
    
  ];

  return (
    <div className={styles.outerContainer} id="services" >
      <h1 className={styles.heading}>What I Offer</h1>
      <span className={styles.tagLine}>
        Comprehensive web development services from concept to deployment.
      </span>
      <div className={styles.innerContainer}>
        {services.map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
      </div>
    </div>
  );
}

export default ServicesSection;
