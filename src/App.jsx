import Card from "./components/Card/Card"
import icon from './assets/card-logo.svg'
import bgCardTop from './assets/bg-card-front.png'
import bgCardBottom from './assets/bg-card-back.png'
import check from './assets/icon-complete.svg'
import bgBack from  './assets/bg-main-desktop.png'
import bgMobile from './assets/bg-main-mobile.png'
import styles from './App.module.scss'
import Input from "./components/Input/Input"
import { useState } from "react"

function App() {
  const [nameCard, setNameCard] = useState({content: 'Jane Apleseed', valid: true})
  const [numberCard, setNumberCard] = useState({content:'0000000000000000', valid: true})
  const [pinCard, setPinCard] = useState({content: '000', valid: true})
  const [date, setDate] =useState({content: '00', valid: true })
  const [year, setYear] = useState({content:'00', valid: true })
  const [formEmpty, setFormEmpty] = useState(false)
  const [sendForm, setSendForm] = useState(false)
  
  const clearForm = () => {
    setNameCard({content: 'Jane Apleseed', valid: true})
    setNumberCard({content:'0000000000000000', valid: true})
    setPinCard({content: '000', valid: true})
    setDate({content: '00', valid: true })
    setYear({content:'00', valid: true })
    setFormEmpty(false)
    setSendForm(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      nameCard.content !== '' && nameCard.valid === true &&
      numberCard.content !== '' && numberCard.valid === true &&
      pinCard.content !== '' && pinCard.valid === true &&
      date.content !== '' && parseInt(date.content) <= 12 && date.valid === true &&
      year.content !== '' && parseInt(year.content) <= 30 && parseInt(year.content) >= 23 && year.valid === true){
        setSendForm(true)
      }
    else{
      setFormEmpty(true)
    }
  }

  const express = {
    nombre: /^[a-zA-ZÀ-ÿ\s]/,
    numeros: /^[0-9]*(\.?)[0-9]+$/,
    dia: /^\d{2}$/,
    anio: /^\d{2}$/,
    pin: /^\d{3}$/,
  }

  return (
    <div className={styles.App}>
      <div className={styles.background}>
        <img className={styles.bg__desktop} src={bgBack} alt="bg-main" />
        <img className={styles.img__mobile} src={bgMobile} alt="bg-main-mobile" />
      </div>
      <div className={styles.container}>
        <div className={styles.container__cards}>
          <Card className={styles.card__bottom} backgroundUrl={bgCardBottom}>
            <p>{pinCard.content}</p>
          </Card>
          <Card className={styles.card__top} backgroundUrl={bgCardTop}>
            <div className={styles.container__image}><img src={icon} alt="logo-card" /></div>
            <div className={styles.info__card}>
              <p className={styles.digits}>{numberCard.content.replace(/(\d{4})/g, '$1 ')}</p>
              <p className={styles.info__card__bottom}><span>{nameCard.content.toUpperCase()}</span><span>{date.content}/{year.content}</span></p>
            </div>
          </Card>
        </div>
        {sendForm ? 
        <div className={styles.form__success}>
          <img src={check} alt="logo-check" />
          <h3>thank you</h3>
          <p>We've added your card details</p>
          <button className={styles.button__submit} onClick={clearForm}>Continue</button>
        </div>
        : 
        <form className={styles.form}>
          <Input
          state={nameCard.valid} 
          labelText='cardholder name'
          setFn={setNameCard}
          type='text'
          value={nameCard.content}
          onChange={(e) => setNameCard(state => ({...state, content: e.target.value}))}
          placeholder='e.g Jane Apleseed'
          maxLength={30}
          expReg={express.nombre}
          />
          <Input 
          state={numberCard.valid}
          labelText='card number'
          setFn={setNumberCard}
          type='text'
          value={numberCard.content}
          onChange={(e) => setNumberCard(state => ({...state, content: e.target.value}))}
          placeholder='e.g 1234 5678 9123 0000'
          maxLength={16}
          expReg={express.numeros}
          />
          <div className={styles.info__fechas}>
            <div className={styles.dates__left}>
            <Input 
            state={date.valid}
            labelText='exp.date (MM)'
            setFn={setDate} 
            type='text' 
            value={date.content}
            onChange={(e) => setDate(state => ({...state, content: e.target.value}))}
            placeholder='MM'
            maxLength={2}
            expReg={express.dia} 
            />
            <Input
            state={year.valid}
            labelText='(YY)'
            type='text'
            setFn={setYear} 
            value={year.content}
            onChange={(e) => setYear(state => ({...state, content: e.target.value}))}
            placeholder='YY'
            maxLength={2}
            expReg={express.anio} 
            />
            </div>
           <div className={styles.dates__right}>
            <Input 
              state={pinCard.valid} 
              labelText='cvc'
              setFn={setPinCard} 
              type='text' 
              value={pinCard.content}
              onChange={(e) => setPinCard(state => ({...state, content: e.target.value}))}
              placeholder='e.g 123'
              maxLength={3}
              expReg={express.pin} 
              />
           </div>
          </div>
          {formEmpty && <p style={{color: 'hsl(0, 100%, 66%)'}}>Wrong fields</p>}
          <button className={styles.button__submit} type="submit" onClick={handleSubmit}>Confirm</button>
        </form> 
        }
      </div>      
    </div>
  )
}

export default App
