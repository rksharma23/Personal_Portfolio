import styles from "./ContactSection.module.css";
import ContactForm from "../Form/ContactForm";

function ContactSection() {
  return (
    <div className={styles.outerContainer} id="contact" >
      <h1 className={styles.heading}>Contact Me</h1>
      <span className={styles.tagLine}>
        Ready to start a project? Or just want to connect? Let's talk!
      </span>
      <ContactForm />
    </div>
  );
}

export default ContactSection;
