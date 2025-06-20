import styles from "./ContactForm.module.css";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("For testing", form.current)
    emailjs.sendForm(
      'service_tqhktwb',      // e.g., "service_123abc"
      'template_lretuuk',     // e.g., "template_456xyz"
      form.current,
      'zJVMF1SSngihPvwLP'       // e.g., "user_dk18gqslxLJh1"
    ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result);
      },
      (error) => {
        alert('An error occurred.');
        console.log(error);
      }
    );
  };


  return (
    <form ref={form} className={styles.outerContainer} onSubmit={sendEmail} >
      <h3 className={styles.heading}>Get In Touch</h3>
      <span className={styles.tagLine}>
        Have a project in mind or just want to say hello? Send me a message.
      </span>
      <div className={styles.innerContainer}>
        <div className={styles.fieldGroup}>
          <div className={`${styles.inputField} ${styles.halfField}`}>
            <label>Name</label>
            <input placeholder="Your Name" type="text" required={true} name="name" />
          </div>
          <div className={`${styles.inputField} ${styles.halfField}`}>
            <label>Email</label>
            <input placeholder="Your Email" type="email" required={true} name="title" />
          </div>
        </div>
        <div className={styles.inputField}>
          <label>Message</label>
          <textarea rows={7} placeholder="Your Message..." required={true} name="message" />
        </div>
        <button className={styles.sendBtn} type="submit" >Send Message</button>
      </div>
      <div className={styles.contactDetails} >
        <div className={styles.contactDetialsWrapper} >
          <LuMail className={styles.contactIcon} />
          <span>rksharma23082002@gmail.com</span>
        </div>
        <div className={styles.contactDetialsWrapper}>
          <FiPhone className={styles.contactIcon} />
          <span>+91-6204777069</span>
        </div>
        <div className={styles.contactDetialsWrapper}>
          <MdOutlineLocationOn className={styles.contactIcon} />
          <span>Bokaro, India</span>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
