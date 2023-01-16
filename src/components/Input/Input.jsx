
function Input({ setFn, labelText, onChange, type, value, placeholder, maxLength, expReg }) {
  const validation = () => {
    if(expReg.test(value)){
      setFn(state => ({...state, valid: true}))
      console.log('es valido')
    }
    else{
      setFn(state => ({...state, valid: false}))
      console.log('es invalido')
    }
  }
  return (
    <>
      <label>{labelText}</label>
      <input 
      type={type}
      value={value}
      onChange={onChange}
      onKeyUp={validation}
      placeholder={placeholder}
      maxLength={maxLength}
      required
      />
    </>
  )
}

export default Input