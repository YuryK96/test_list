import {TestListModule} from "@/modules";
import {FC} from "react";
import s from './testListPage.module.scss'
export const TestListPage: FC<TestListPagePropsType> = () => {
    return <div className={s.testListModule}>
        <TestListModule />
    </div>
}

type TestListPagePropsType = {

}
