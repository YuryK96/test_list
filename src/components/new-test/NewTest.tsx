import {Input} from "@/UI/inputs/Input.tsx";
import {FC, useState} from "react";
import s from "./newTest.module.scss"
import {Button} from "@/UI/buttons/Button.tsx";
import {TextArea} from "@/UI/inputs/Textarea.tsx";


export const NewTest: FC<NewTestPropsType> = ({ callback})=> {
    const [testTitle, setTestTitle] = useState('')
    const [descrTitle, setDescrTitle] = useState('')

    const addNewTest = ()=> {
        callback(testTitle,descrTitle)
        setTestTitle("");
        setDescrTitle("")
    }

    return <div className={s.newTest}>
        <Input placeholder="Введите нвзвание нового теста" val={testTitle} callback={(newVal: string) => {
            setTestTitle(newVal);
        }} isEdit={true}/>
        <TextArea placeholder="Введите описание нового теста"  val={descrTitle} callback={(newVal: string) => {
            setDescrTitle(newVal);
        }} isEdit={true}/>
        <Button type="button" callback={addNewTest} title="add Test" />
    </div>
}

type NewTestPropsType = {
    callback: ( title: string, descr: string) => void
}
