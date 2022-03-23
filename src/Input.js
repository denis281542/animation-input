import { useState } from "react"
import './app.css'

export const Input = props => {
    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)

    var labelClass = 'label';

    const onChange = e => setValue(e.target.value)
    const onFocus = () => setFocus(true);
    const onBlur = () => {if(value.length === 0) setFocus(false)};

    if(focus) labelClass += ' label--active'

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
                className="input"
            />
        </div>
    )
}