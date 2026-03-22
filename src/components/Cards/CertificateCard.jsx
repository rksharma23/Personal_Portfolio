import { FaAward } from "react-icons/fa";
import styles from './CertificateCard.module.css';

const CertificationCard = ({
  title,
  description,
  date,
  certificateLink
}) => {
  return (
    <a href={certificateLink} download={true}><div className={styles.card}>
      <div className={styles.iconColumn}>
        <div className={styles.iconWrapper}>
          <FaAward className={styles.icon} />
        </div>
      </div>

      <div className={styles.textColumn}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>{date}</p>
      </div>
    </div></a>
  );
};

export default CertificationCard;
