import { useState } from "react"
import './app.css'

export const Input = props => {
    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    var labelClass = 'label';
    var errorClass = 'error';
    var inputClass = 'input';

    const onChange = e => setValue(e.target.value)

    const onFocus = () => {
        setFocus(true)
        setError(false)
    };

    const onBlur = () => {
        if(value.length === 0) {
            setFocus(false)
            setError(true)
            setErrorText('Ошибка. Пустое поле')
        }

        if(value.length != 0 && value.length <= 2) {
            // setFocus(false)
            setError(true)
            setErrorText('Ошибка валидации')
        }
    };

    if(focus) labelClass += ' label--active'
    if(error) errorClass += ' error--active'
    if(error) inputClass += ' input--error'

    return(
        <div className="wrapper">
            <label
                className={labelClass}
                htmlFor={props.htmlFor}
            >{props.label}</label>

            <input 
                id={props.htmlFor}
                type={props.text}
                name={props.name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={inputClass}
            />
            <span
                className={errorClass}
            >{errorText}</span>
        </div>
    )
}