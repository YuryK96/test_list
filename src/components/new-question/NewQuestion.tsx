import {FC, useState} from "react";
import {TextArea} from "@/UI/inputs/Textarea.tsx";
import {Button} from "@/UI/buttons/Button.tsx";
import {IAnswer, ITitleTestList} from "@/models/testModels.ts";

import {newQuestionDto} from "@/dto/questionDto.ts";
import {Answers} from "@/components/answers/Answers.tsx";
import {Select} from "@/UI/select/Select.tsx";
import s from './newQuestion.module.scss'

const answersTemplate: IAnswer[] = [{
    answer: "",
    isRight: false,
    id: 0
}, {
    answer: "",
    isRight: false,
    id: 1
}, {
    answer: "",
    isRight: false,
    id: 2
}, {
    answer: "",
    isRight: false,
    id: 3
}]

export const NewQuestion: FC<NewQuestionPropsType> = ({callback, titleList, isEdit}) => {
    const [questionFirstDescr, setQuestionFirstDescr] = useState('')
    const [questionSecondDescr, setQuestionSecondDescr] = useState('')

    let answers: IAnswer[];
    const handleAddAnswers = (ans: IAnswer[]) => {
        answers = ans
    }

    const addNewQuestion = (event: any) => {
        event.preventDefault()
        const formElements = event.target.elements;
        const formData: newQuestionDto = {
            firstDescription: "",
            secondDescription: "",
            answers,
            image: ""
        };

        let testId;
        for (let element of formElements) {
            if (element.nodeName === 'SELECT') {
                testId = element.value
            }
            if (element.type === 'url') {
                formData.image = element.value
            }

            if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {

                if (element.name === "firstDescription" || element.name === "secondDescription") {
                    formData[element.name as "firstDescription" || "secondDescription"] = element.value;
                }
            }
        }
        callback(formData, testId)
    }
    return <form className={s.newQuestion} onSubmit={addNewQuestion}>

        <input type="url" placeholder="вставьте картинку"/>
        <TextArea name="firstDescription" placeholder="Введите описание нового вопроса" val={questionFirstDescr}
                  isEdit={true}
                  callback={(newVal) => setQuestionFirstDescr(newVal)}/>
        <TextArea name="secondDescription" placeholder="Введите описание нового вопроса" val={questionSecondDescr}
                  isEdit={true}
                  callback={(newVal) => setQuestionSecondDescr(newVal)}/>
        <Select name="testId" list={titleList}/>
        <Answers callback={handleAddAnswers} answers={answersTemplate} isEdit={isEdit}/>
        <Button type="submit" title="Добавить вопрос"/>
    </form>
}

type NewQuestionPropsType = {
    callback: (newQuestionData: any, testId: string) => void
    titleList: ITitleTestList[]
    isEdit: boolean
}
