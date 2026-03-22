import styles from "./CertificationSection.module.css";
import CertificateCard from "../Cards/CertificateCard";

function CertificationSection() {
  const certifications = [
    {
      title: "ISTQB Certified Tester",
      description: "International Software Testing Qualification Board",
      date: "Issued: Oct 2025",
      certificateLink: "./ISTQB.pdf",
    },
    {
      title: "The DevOps Essentials",
      description: "IBM India",
      date: "Issued: Apr 2025",
      certificateLink: "./DevOps Certificate IBM.pdf",
    },
    {
      title: "Quality Engineer-FullStack",
      description: "Techademy - IBM India",
      date: "Issued: Sept 2025",
      certificateLink: "./Techademy IBM Training.pdf",
    },
    {
      title: "MERN Stack Industrial Training",
      description: "ThinkNext Technologies",
      date: "Issued: May 2025",
      certificateLink: "./ThinkNext_Certificate.pdf",
    },
    {
      title: "Full-Stack Industrial Training",
      description: "Excellence Technology",
      date: "Issued: July 2023",
      certificateLink: "./ExcellenceTech_Certificate.pdf",
    },
    {
      title: "AWS Cloud Foundational",
      description: "AWS Academy Graduate",
      date: "Issued: October 2022",
      certificateLink: "./AWS_CloudFoundation_Certificate.pdf",
    },
  ];
  return (
    <div className={styles.outerContainer} id="certificates">
      <h1 className={styles.heading}>Certifications & Training</h1>
      <span className={styles.tagLine}>
        Credentials from my industrial training programs and Certification
        courses.
      </span>
      <div className={styles.innerContainer}>
        {certifications.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            description={certificate.description}
            date={certificate.date}
            certificateLink={certificate.certificateLink}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificationSection;
