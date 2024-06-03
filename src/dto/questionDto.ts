import {IAnswer} from "@/models/testModels.ts";


export interface newQuestionDto {
    firstDescription: string,
    secondDescription: string,
    answers: IAnswer[],
    image: string
}
