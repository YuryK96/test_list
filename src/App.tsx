import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TestListPage} from "@/pages/test-list-page/TestListPage.tsx";
import {QuestionListPage} from "@/pages/question-list-page/QuestionListPage.tsx";
import TestListStore from "@/modules/test-module/store/testListStore.ts";
import {observer} from "mobx-react-lite";
import {Button} from "@/UI/buttons/Button.tsx";


function App() {
    return (
        <BrowserRouter>
            <Button callback={()=> TestListStore.changeEditMode()} title={TestListStore.isEditMode ? "isAdminMode" : "isUserMode"}/>
            <Routes>
                <Route path="/" element={<TestListPage/>}/>
                <Route path="/:testIndex/:questionIndex" element={<QuestionListPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App)
