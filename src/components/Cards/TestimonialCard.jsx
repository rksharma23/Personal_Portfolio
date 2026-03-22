import { LuQuote } from "react-icons/lu";
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({
  testimonial,
  clientName,
  clientPosition,
  clientImage,
}) => {
  return (
    <div className={styles.card} >
      <div className={styles.iconSection}>
        <div className={styles.quoteIconWrapper}>
          <LuQuote className={styles.quoteIcon} />
        </div>
      </div>

      <p className={styles.testimonialText}>
        "{testimonial}"
      </p>

      <div className={styles.clientSection}>
        <div className={styles.clientImageWrapper}>
          <img
            src={clientImage}
            alt={clientName}
            className={styles.clientImage}
          />
        </div>

        <div className={styles.clientDetails}>
          <h4 className={styles.clientName}>{clientName}</h4>
          <p className={styles.clientPosition}>{clientPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
