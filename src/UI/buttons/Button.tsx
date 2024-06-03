import {FC} from "react";
import s from './button.module.scss'

export const Button: FC<ButtonPropType> = ({callback= ()=>{}, title,type="button"}) => {
    return <button type={type} className={s.button} onClick={callback}>{title}</button>
}

type ButtonPropType = {
    callback?: () => void
    title: string
    type?: "button" | "submit" | "reset"
}
