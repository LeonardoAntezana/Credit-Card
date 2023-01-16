import styles from './Card.module.scss'

function Card({ className, backgroundUrl , children }) {
  return (
    <div style={{backgroundImage: `url(${backgroundUrl})`}} className={`${className} ${styles.card}`}>
      {children}
    </div>
  )
}

export default Card