import Tags from '../Tags/Tags.jsx';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  buttonText,
  projectLink
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <img 
          src={image} 
          alt={title}
          className={styles.card_img}
        />
      </div>
      
      <div className={styles.card_content}>
        <div className={styles.card_text}>
          <h3 className={styles.card_title}>
            {title}
          </h3>
          <p className={styles.card_description}>
            {description}
          </p>
          <Tags tags={tags} />
        </div>
        
        <div className={styles.card_button_container}>
          <button 
            onClick={()=>window.open(projectLink, '_blank')}
            className={styles.card_button}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
