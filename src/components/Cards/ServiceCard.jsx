import styles from './ServiceCard.module.css';

const ServicesCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServicesCard;
