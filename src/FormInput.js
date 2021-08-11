import { useState } from "react"
import "./FormInput.css"

const FormInput = () => {
  const [inputValue, setInputValue] = useState("")
  const updateValue = event => setInputValue(event.target.value)

  return (
    <fieldset className="FormInput">
      <label htmlFor="form-input">Username</label>
      <input id="form-input" type="text" value={inputValue} onChange={updateValue} />
    </fieldset>
  )
}

export default FormInput
