import styles from './Tags.module.css';

const Tags = ({ tags = [], maxVisible = 3 }) => {
  const visibleTags = tags.slice(0, maxVisible);
  const remainingCount = tags.length - maxVisible;

  return (
    <div className={styles.tags_container}>
      {visibleTags.map((tag, index) => (
        <span
          key={index}
          className={styles.tag}
        >
          {tag}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className={styles.tag_overflow}>
          +{remainingCount}
        </span>
      )}
    </div>
  );
};

export default Tags;
