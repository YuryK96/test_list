import {QuestionListModule} from "@/modules";
import s from './questionPage.module.scss'
export const QuestionListPage = () => {
    return <div className={s.questionPage}>
        <QuestionListModule/>
    </div>
}
