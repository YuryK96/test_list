import {TestList} from "@/modules/test-module/components/test-list/TestList.tsx";
import {FC} from "react";

export const TestListModule: FC<TestListModulePropsType> = () => {
    return <>
        <TestList />
    </>
}

type TestListModulePropsType = {

}
