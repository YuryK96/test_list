import s from './test.module.scss'
import {Input} from "@/UI/inputs/Input.tsx";
import {FC, useState} from "react";
import {TextArea} from "@/UI/inputs/Textarea.tsx";

export const Test: FC<TestPropsType> = ({isEdit, title, description, testId, callback}) => {
    const [testTitle, setTestTitle] = useState(title)
    const [descrTitle, setDescrTitle] = useState(description)

    return <div className={s.test}>
        <Input placeholder="Введите название" val={testTitle} callback={(newVal: string) => {
            setTestTitle(newVal);
            callback(testId, testTitle, descrTitle)
        }} isEdit={isEdit}/>
        <TextArea placeholder="Введите описание" val={descrTitle} callback={(newVal: string) => {
            setDescrTitle(newVal);
            callback(testId, testTitle, descrTitle)
        }} isEdit={isEdit}/>
    </div>
}

type TestPropsType = {
    isEdit: boolean;
    title: string;
    description: string
    testId: number;
    callback: (id: number, title: string, descr: string) => void
}
