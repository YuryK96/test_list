import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {CheckBox} from "@/UI/inputs/CheckBox.tsx";
import {IAnswer} from "@/models/testModels.ts";
import s from './answer.module.scss'

export const Answers: FC<AnswersPropsType> = ({isEdit, answers,callback}) => {
    const [allAnswers, setAnswers] = useState<IAnswer[]>(answers)

    useEffect(() => {
        setAnswers(answers)
    }, [answers]);

    const handleSetAnswer = (setAnswer: Dispatch<SetStateAction<IAnswer[]>>, val: string | boolean, id: number) => {

        setAnswer((prev: IAnswer[]) => {

            const index = prev.findIndex((answer) => answer.id === id);

            if (index !== -1) {
                const newState = prev.map((ans, i) => {
                    if (index === i) {
                        return {
                            ...ans,
                            answer: typeof val === 'string' ? val : ans.answer,
                            isRight: typeof val === 'boolean' ? val : ans.isRight
                        }
                    }
                    return ans
                })
                callback(newState)
                return newState
            }
            callback(prev)
            return prev
        })

    }

    return <div >
        {allAnswers && allAnswers.map((answer) => <div className={answer.isRight && isEdit ? s.active : undefined} key={answer.id}>
            <CheckBox  id={answer.id} isEdit={isEdit} val={answer.answer} name={answer.answer}
                      callback={(val, id) => handleSetAnswer(setAnswers, val, id)}/>
        </div>)}

    </div>
}

type AnswersPropsType = {
    isEdit: boolean
    answers: IAnswer[]
    callback: (answers: IAnswer[])=>void
}
