import {useNavigate, useParams} from "react-router-dom";
import {Question} from "@/components/question/Question.tsx";
import TestListStore from "@/modules/test-module/store/testListStore.ts";
import {observer} from "mobx-react-lite";
import {newQuestionDto} from "@/dto/questionDto.ts";
import {useEffect, useState} from "react";

export const QuestionListModule = observer(() => {
    const {testIndex, questionIndex} = useParams()
    const [question, setQuestion]= useState(TestListStore.getQuestion
    (+testIndex!, +questionIndex!))
    const navigate = useNavigate()
    const isEdit = TestListStore.isEditMode

    useEffect(() => {
        const test = TestListStore.getQuestion
        (+testIndex!, +questionIndex!)
        if (!test) {
            navigate(`/`)
        }
        setQuestion( (prev)=> ({...prev,...test }) )
    }, [questionIndex]);
    const nextQuestion = () => {
        navigate(`/${testIndex}/${+questionIndex! + 1}`)

    }


    const changeQuestion = (formData: newQuestionDto) => {
       const changedTest = TestListStore.changeQuestion(+testIndex!, +questionIndex!, question.id, formData)
        TestListStore.changeEditMode()
        setQuestion( (prev)=> ({...prev,...changedTest }) )
    }
    return <>
        {question && <Question question={question} isEdit={isEdit} nextQuestion={nextQuestion} callback={changeQuestion}/> }
    </>
})
