import { Route, Routes, Navigate, useParams} from "react-router";
import { Provider } from "react-redux";
import store from "../../../store";
import NavigationTabs from "./NavigationTabs";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuestionEditor from "./QuestionsEditor";


export default function QuizEditor({cid}: {cid: any}) {

    const { qid } = useParams();


    return (
        <Provider store={store}>
            <div id="wd-editor">
                <NavigationTabs cid={cid} qid={qid}/>
                <Routes>
                    <Route path="/*" element={<Navigate to="Details/*" />} />
                    <Route path="Details/*"  element={< QuizDetailsEditor/>} />
                    <Route path="Questions/*" element={<QuestionEditor cid={cid} />} />
                </Routes>
            </div>
        </Provider>
    );
}

