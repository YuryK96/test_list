import {FC} from "react";
import s from './input.module.scss'

export const Input: FC<InputPropType> = ({val, placeholder, isEdit, callback,name}) => {
    return <input  name={name} placeholder={placeholder} onChange={(event) => callback(event.target.value)} className={!isEdit ? s.input : s.editMode}
                  value={val}  type="text"/>
}
type InputPropType = {
    val: string;
    isEdit: boolean;
    callback: (newVal: string) => void;
    placeholder: string
    name?: string

}
