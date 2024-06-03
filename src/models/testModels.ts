export interface ITest {
    title: string;
    description: string;
    id: number;
    questions: IQuestion[]

}

export interface IQuestion {
    image: string;
    firstDescription: string;
    id: number;
    secondDescription: string;
    answers: IAnswer[];

}

export interface IAnswer {
    answer: string;
    isRight: boolean
    id:number
}

export interface ITitleTestList {
    title:string;
    id: number
}
