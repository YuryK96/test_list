import {FC} from "react";
import {ITitleTestList} from "@/models/testModels.ts";

export const Select: FC<SelectPropsType> = ({list,name}) => {
    return <select name={name} title="Выберите тест" >
        {list.map((option) => {
            return <option key={option.id} value={option.id}>{option.title}</option>
        })}
    </select>
}

type SelectPropsType = {
    list: ITitleTestList[]
    name?:string
}
