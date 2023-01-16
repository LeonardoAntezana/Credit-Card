import Card from "./components/Card/Card"
import icon from './assets/card-logo.svg'
import bgCardTop from './assets/bg-card-front.png'
import bgCardBottom from './assets/bg-card-back.png'
import styles from './App.module.scss'
import Input from "./components/Input/Input"
import { useState } from "react"

function App() {
  const [infoCard, setInfoCard] = useState({name: '', numbers: '', pin: '', date: ''})
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.container__cards}>
          <Card className={styles.card__top} backgroundUrl={bgCardTop}>
            <div className={styles.container__image}><img src={icon} alt="logo-card" /></div>
            <div className={styles.info__card}>
              <p className={styles.digits}>{infoCard.numbers}</p>
              <p className={styles.info__card__bottom}><span>{infoCard.name}</span><span>{infoCard.date}</span></p>
            </div>
          </Card>
          <Card className={styles.card__bottom} backgroundUrl={bgCardBottom}>
            <p>{infoCard.pin}</p>
          </Card>
        </div>
        <div className={styles.form}>
          <Input/>
        </div>
      </div>      
    </div>
  )
}

export default App
