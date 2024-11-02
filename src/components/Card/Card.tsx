import styles from './Card.module.scss'

type ContentProps = {
  cardTitle?: string
  sectionTitle?: string
  text?: string
}
type CardProps = {
  content: ContentProps
}
const Card = ({ content }: CardProps) => {
  return (
    <div className={styles.cardWrapper}>
      {content.sectionTitle ? <h3 className={styles.titleSection}>{content.sectionTitle}</h3> : ''}
      <div className={styles.card}>
        {content.cardTitle ? <p className={styles.cardTitle}>{content.cardTitle}</p> : ''}
        {content.text ? <p className={styles.text}>{content.text}</p> : ''}
      </div>
    </div>
  )
}

export default Card
