import Card from "./components/Card/Card"
import icon from './assets/card-logo.svg'
import bgCardTop from './assets/bg-card-front.png'
import bgCardBottom from './assets/bg-card-back.png'
import styles from './App.module.scss'
import Input from "./components/Input/Input"
import { useState } from "react"

function App() {
  const [nameCard, setNameCard] = useState({content: '', valid: true})
  const [numberCard, setNumberCard] = useState({content:'', valid: true})
  const [pinCard, setPinCard] = useState({content: '', valid: true})
  const [date, setDate] =useState({day: '', year:''})
  
  const express = {
    nombre: /^[a-zA-ZÀ-ÿ\s]/,
    numbers: /^.{19,19}$/,
    dia: /^\d{1,31}$/,
    anio: /^\d{23,30}$/}

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.container__cards}>
          <Card className={styles.card__top} backgroundUrl={bgCardTop}>
            <div className={styles.container__image}><img src={icon} alt="logo-card" /></div>
            <div className={styles.info__card}>
              <p className={styles.digits}>{numberCard.content}</p>
              <p className={styles.info__card__bottom}><span>{nameCard.content}</span><span>{date.day}</span></p>
            </div>
          </Card>
          <Card className={styles.card__bottom} backgroundUrl={bgCardBottom}>
            <p>{pinCard.content}</p>
          </Card>
        </div>
        <form className={styles.form}>
          <Input labelText='cardholder name'
          setFn={setNameCard}
          type='text'
          value={nameCard.content}
          onChange={(e) => setNameCard(state => ({...state, content: e.target.value}))}
          placeholder='Your name'
          maxLength={30}
          expReg={express.nombre}
          />
          <Input labelText='card number'
          setFn={setNumberCard}
          type='text'
          value={numberCard.numbers}
          onChange={(e) => setNumberCard(state => ({...state, content: e.target.value}))}
          placeholder='Card Number'
          maxLength={19}
          expReg={express.numbers}
          />
          <Input labelText='exp.date (MM/YY)' 
          type='text' 
          value={date.day}
          onChange={(e) => setDate(state => ({...state, day: e.target.value}))}
          placeholder='Day'
          maxLength={2} 
          />
          <Input type='text' 
          value={date.year}
          onChange={(e) => setDate(state => ({...state, year: e.target.value}))}
          placeholder='YY'
          maxLength={2} 
          />
          <Input labelText='cvc' 
          type='text' 
          value={pinCard.content}
          onChange={(e) => setPinCard(state => ({...state, content: e.target.value}))}
          placeholder='e.g 123'
          maxLength={3} 
          />
          <button>Confirm</button>
        </form>
      </div>      
    </div>
  )
}

export default App
