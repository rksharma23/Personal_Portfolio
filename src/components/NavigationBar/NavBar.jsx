import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './NavBar.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_inner}>
        <div className={styles.nav_flex}>
          <div className={styles.logo}>Roshan Sharma</div>

          <div className={styles.nav_links_desktop}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.nav_link}>
                {link.name}
                <span className={styles.link_underline}></span>
              </a>
            ))}
          </div>

          <div className={styles.cv_button_desktop}>
            <a href="./Roshan_Resume.pdf" download={true} ><button className={styles.cv_button}>Download CV</button></a>
          </div>

          <div className={styles.mobile_toggle}>
            <button onClick={toggleMenu} className={styles.toggle_button}>
              {isMenuOpen ? <HiX className={styles.icon} /> : <HiMenu className={styles.icon} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles['mobile_menu']} ${isMenuOpen ? styles.open : styles.closed}`}>
        <div className={styles.mobile_links}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.mobile_link} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className={styles.mobile_cv}>
            <a href="./Roshan_Resume.pdf" download={true} ><button className={styles.cv_button} onClick={() => setIsMenuOpen(false)}>
              Download CV
            </button></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
