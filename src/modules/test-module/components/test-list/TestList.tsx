import s from './testList.module.scss'
import {Test} from "@/components/test/Test.tsx";
import TestListStore from "@/modules/test-module/store/testListStore.ts";
import {NewTest} from "@/components/new-test/NewTest.tsx";
import {observer} from "mobx-react-lite";
import {NewQuestion} from "@/components/new-question/NewQuestion.tsx";
import {ITitleTestList} from "@/models/testModels.ts";
import {newQuestionDto} from "@/dto/questionDto.ts";
import {useNavigate} from "react-router-dom";


export const TestList = observer(() => {
    const navigate = useNavigate()
    const changeTests = (id: number, title: string, descr: string) => {
        TestListStore.changeTest(id, title, descr)
    }

    const addNewTests = (title: string, descr: string) => {
        TestListStore.addTest(title, descr)
    }

    const addNewQuestion = (newQuestionData: newQuestionDto, testId: string) => {
        TestListStore.addQuestion(newQuestionData, testId)
        TestListStore.changeEditMode()

    }

    const startTest = (testIndex:number) => {
        if (TestListStore.isEditMode) {
            return
        }
        navigate(`/${testIndex}/0`)

    }

    const titleTestList: ITitleTestList[] = []
    return <div  className={s.testList}>
        {TestListStore.testList.map((test,i) => {
                titleTestList.push({title: test.title, id: test.id})
                return <div className={TestListStore.isEditMode ? s.editMode : s.wrapper} onClickCapture={() => startTest(i)} key={test.id}><Test
                    callback={changeTests}
                    testId={test.id}
                    title={test.title}
                    description={test.description}
                    isEdit={TestListStore.isEditMode}/>
                </div>
            }
        )
        }

        {TestListStore.isEditMode && <> <h3>Новый тест</h3> <NewTest callback={addNewTests}/></>}

        {TestListStore.isEditMode && <> <h3>Новый вопрос</h3>
            <NewQuestion isEdit={TestListStore.isEditMode} callback={addNewQuestion} titleList={titleTestList}/></>}

    </div>
})
