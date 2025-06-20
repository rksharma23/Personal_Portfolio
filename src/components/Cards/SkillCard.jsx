import styles from './SkillCard.module.css'

const SkillCard = ({
  icon: Icon,
  skill,
}) => {
  return (
    <div className={styles.container} >
        <Icon className={styles.icon} />
        <h3 className={styles.title} >{skill}</h3>
    </div>
  )
}

export default SkillCard