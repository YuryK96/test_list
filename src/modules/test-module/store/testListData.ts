import {ITest} from "@/models/testModels.ts";
import image from "@/assets/img.png"
import image1 from "@/assets/img_1.png"

export const testListData: ITest[] = [
    {
        title: "test1",
        description: "test 1 is about important thing",
        id: 1,
        questions: [{
            image: image,
            firstDescription: "description 1 about question",
            id:1,
            secondDescription: "description 2 about question",
            answers: [
                {answer: "answer 1", id:0, isRight: true},
                {answer: "answer 3",id:1, isRight: false},
                {answer: "answer 4",id:2, isRight: false},
                {answer: "answer 5", id:3, isRight: false}]
        },{
            image: image1,
            firstDescription: "description 123 about question",
            id:2,
            secondDescription: "description 2123123 about question",
            answers: [
                {answer: "answer 123", id:0, isRight: true},
                {answer: "answer 33",id:1, isRight: false},
                {answer: "answer 43",id:2, isRight: false},
                {answer: "answer 5", id:3, isRight: false}]
        },]
    },
    {
        title: "test2", description: "test 2 is about important thing",
        id: 2,
        questions: [{
            image: image1,
            firstDescription: "descriptionsdf 1 about question",
            id:1,
            secondDescription: "description 2 about question",
            answers: [
                {answer: "answer 2", id:0, isRight: true},
                {answer: "answer 3",id:1, isRight: false},
                {answer: "answer 4",id:2, isRight: false},
                {answer: "answer 5", id:3, isRight: false}]
        },
            {
                image: image,
                firstDescription: "description 1 about question",
                id:1,
                secondDescription: "description 2 about question",
                answers: [
                    {answer: "answer 2", id:0, isRight: true},
                    {answer: "answer 3",id:1, isRight: false},
                    {answer: "answer 4",id:2, isRight: false},
                    {answer: "answer 5", id:3, isRight: false}]
            },]
    },
    {
        title: "test3", description: "test 3 is about important thing",
        id: 3,
        questions: [{
            image: image,
            firstDescription: "description 1 about question",
            id:1,
            secondDescription: "description 2 about question",
            answers: [
                {answer: "answer 2", id:0, isRight: true},
                {answer: "answer 3",id:1, isRight: false},
                {answer: "answer 4",id:2, isRight: false},
                {answer: "answer 5", id:3, isRight: false}]
        },{
            image: "https://img.freepik.com/free-photo/cute-kitten-staring-out-window-playful-curiosity-generative-ai_188544-12520.jpg?t=st=1717406997~exp=1717410597~hmac=888f9024844eb614b3d6a95b04a8e12f7f77b3acc2bf8b39276e618fda0f167a&w=740",
            id:1,
            firstDescription: "description 1 about question",
            secondDescription: "description 2 about question",
            answers: [
                {answer: "answer 2", id:0, isRight: true},
                {answer: "answer 3",id:1, isRight: false},
                {answer: "answer 4",id:2, isRight: false},
                {answer: "answer 5", id:3, isRight: false}]
        },]

    },


]
