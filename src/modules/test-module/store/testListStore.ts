import {makeAutoObservable} from "mobx";
import {testListData} from './testListData.ts'
import {IQuestion, ITest} from "@/models/testModels.ts";
import {newQuestionDto} from "@/dto/questionDto.ts";

class TestListStore {
    testList: ITest[] = testListData
    isEditMode: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    changeEditMode() {
        this.isEditMode = !this.isEditMode
    }

    changeQuestion(testIndex: number, questionIndex: number, id: number, formData: newQuestionDto) {
        const test = {...formData, id}
        this.testList[testIndex].questions[questionIndex] = test
        return test

    }

    getQuestion(testIndex: number, questionIndex: number) {
        return this.testList[testIndex]?.questions[questionIndex]
    }

    changeTest(id: number, title: string, descr: string) {
        const test = this.testList.find((test) => test.id === id);
        if (test) {
            test.title = title;
            test.description = descr
        }
    }

    addTest(title: string, descr: string) {
        const newTest: ITest = {
            id: new Date().getTime(),
            title, description: descr, questions: []
        }
        this.testList.push(newTest)
    }

    addQuestion(newQuestionData: newQuestionDto, testId: string) {
        const test = this.testList.find((test) => test.id === +testId)

        const newQuestion: IQuestion = {
            ...newQuestionData,
            id: new Date().getTime(),
        }
        test?.questions.push(newQuestion)

    }
}

export default new TestListStore()
