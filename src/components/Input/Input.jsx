import styles from './Input.module.scss'


function Input({ state, setFn, labelText, onChange, type, value, placeholder, maxLength, expReg}) {
  const validation = () => {
    if(expReg.test(value)){
      setFn(state => ({...state, valid: true}))
    }
    else{
      setFn(state => ({...state, valid: false}))
    }
  }

  return (
    <div className={styles.container__input}>
      {labelText && <label>{labelText}</label>}
      <input style={{outlineColor: `${state ? '#6F376A' :'hsl(0, 100%, 66%)'}`}}
      type={type}
      onChange={onChange}
      onKeyUp={validation}
      placeholder={placeholder}
      maxLength={maxLength}
      required
      />
      {state === false && <p style={{color: 'hsl(0, 100%, 66%)'}}>Invalid field</p>}
    </div>
  )
}

export default Input