import {FC} from "react";
import s from './textarea.module.scss'

export const TextArea: FC<TextAreaPropType> = ({val, placeholder, isEdit,name, callback}) => {
    return <textarea readOnly={!isEdit}  name={name} placeholder={placeholder} onChange={(event) => callback(event.target.value)} className={`${s.textareaGeneral} ${!isEdit ? s.textarea : s.editMode}`}
                  value={val} />
}
type TextAreaPropType = {
    val: string;
    isEdit: boolean;
    callback: (newVal: string) => void;
    placeholder: string;
    name?:string

}
