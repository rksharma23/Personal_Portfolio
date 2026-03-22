import styles from "./Footer.module.css";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyrightMessage}>
        © 2025 Roshan Kumar Sharma. All rights reserved.
      </p>
      <div className={styles.socialMediaIconWrapper}>
        <a
          href="https://www.linkedin.com/in/rksharma23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className={styles.smIcon} />
        </a>
        <a
          href="https://github.com/rksharma23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className={styles.smIcon} />
        </a>
        <a
          href="https://www.instagram.com/r_k_sharma23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className={styles.smIcon} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
