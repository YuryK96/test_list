import {FC} from "react";
import s from "@/UI/inputs/input.module.scss";


export const CheckBox: FC<CheckBoxPropType> = ({val, callback, isEdit, name, id,checked}) => {

    return <> <input defaultChecked ={checked} onChange={(e) => {
        callback(e.target.checked, id)
    }} type="checkbox" style={ {cursor:"pointer"} }  name={name}/> <label htmlFor={name}>
        <input placeholder="Введите ответ" disabled={!isEdit} value={val} className={!isEdit ? s.input : s.editMode} type="text"
               onChange={(e) => callback(e.target.value, id)}/>
    </label></>
}

type CheckBoxPropType = {
    val: string;
    callback: (val: string | boolean, id: number) => void;
    isEdit: boolean
    name: string
    id: number
    checked?:boolean
}
