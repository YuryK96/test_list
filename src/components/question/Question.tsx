import {FC, useEffect, useState} from "react";
import {IAnswer, IQuestion} from "@/models/testModels.ts";
import {TextArea} from "@/UI/inputs/Textarea.tsx";
import {Answers} from "@/components/answers/Answers.tsx";
import {Button} from "@/UI/buttons/Button.tsx";
import {newQuestionDto} from "@/dto/questionDto.ts";
import s from './question.module.scss'

export const Question:FC<QuestionPropType> =  ({question,isEdit,nextQuestion,callback})=> {
    const [questionFirstDescr, setQuestionFirstDescr] = useState(question.firstDescription)
    const [questionSecondDescr, setQuestionSecondDescr] = useState(question.secondDescription)

    useEffect(() => {
        setQuestionFirstDescr(question.firstDescription)
        setQuestionSecondDescr(question.secondDescription)
    }, [question]);

    let answers: IAnswer[];
    const handleAddAnswers = (ans: IAnswer[]) => {
        answers = ans
    }

    const addNewQuestion = (event: any) => {
        event.preventDefault()
        if(!isEdit){
            return nextQuestion()
        }
        const formElements = event.target.elements;
        const formData: newQuestionDto = {
            firstDescription: "",
            secondDescription: "",
            answers : answers ? answers : question.answers,
            image: question.image
        };


        for (let element of formElements) {

            if (element.type === 'url') {
                formData.image =  element.value ? element.value :  question.image
            }

            if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {

                if (element.name === "firstDescription" || element.name === "secondDescription") {
                    formData[element.name as "firstDescription" || "secondDescription"] = element.value;
                }
            }
        }
        callback(formData)
    }
    return <>
        <form className={s.question} onSubmit={addNewQuestion}>
            {isEdit && <input type="url" placeholder="ссылка на картинку"/>}
            <TextArea name="firstDescription" placeholder="Введите описание нового вопроса" val={questionFirstDescr}
                      isEdit={isEdit}
                      callback={(newVal) => setQuestionFirstDescr(newVal)}/>
            {question.image && <img src={question.image} alt="img for question"/>}
            <TextArea name="secondDescription" placeholder="Введите описание нового вопроса" val={questionSecondDescr}
                      isEdit={isEdit}
                      callback={(newVal) => setQuestionSecondDescr(newVal)}/>
            <Answers callback={handleAddAnswers} answers={question.answers} isEdit={isEdit}/>
            <Button type="submit" title={isEdit ? "Сохранить изменения" : "Следующий вопрос"}/>
        </form>
    </>
}

type QuestionPropType = {
    question: IQuestion;
    isEdit: boolean;
    nextQuestion: () => void
    callback: (formData:newQuestionDto)=>void
}
