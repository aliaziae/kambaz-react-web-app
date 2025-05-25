import {Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import MultipleChoicePreview from "./MultipleChoicePreview";
import TrueFalseEditor from "./TrueFalseEditor";
import TrueFalsePreview from "./TrueFalsePreview";
import { v4 as uuidv4 } from "uuid";
import { addQuestion, updateQuestion, deleteQuestion } from "../Questions/reducer";
import FillInEditor from "./FillInEditor";
import FillInPreview from "./FillInPreview";

export default function QuestionEditor({cid}: {cid: any}) {

    const { qid } = useParams();

    const dispatch = useDispatch();

    const { questions } = useSelector((state: any) => state.questionReducer);

    const saveUpdates = (question: any) => {
        dispatch(updateQuestion(question));
    }

    const removeQuestion = (questionId: string) => {
        dispatch(deleteQuestion(questionId));
    }

    const newQuestion = () => {
        const newQuestion: any = {
            _id: uuidv4(),
            title: "",
            type: "MULTIPLE_CHOICE",
            questionBody: "",
            quizId: qid,
            course: cid,
            correctAnswer: "",
            answerOptions:[{
                "_id": uuidv4(),
                "answer": ""
            }],
            points: 0,
            editing: true,
          };
          dispatch(addQuestion(newQuestion));
    }


    return (
        <div id="wd-quiz-questions-editor" className="mb-5 p-3">
            <div id="quiz-new-question" className="mb-4 d-flex  justify-content-center">
                <Button onClick={newQuestion}
                    variant="secondary" size="lg" className="me-1 d-flex justify-content-center" id="wd-add-question-btn">
                    New Question
                </Button>
                </div>
                <hr/>
                {questions
                .filter((question: any) => question.quizId === qid)
                .map((question : any) => (
                    question.type == "MULTIPLE_CHOICE" && question.editing ? (<MultipleChoiceEditor question={question} updateQuestion={saveUpdates} />) :
                    question.type == "MULTIPLE_CHOICE" && !question.editing ? (<MultipleChoicePreview question={question} updateQuestion={saveUpdates} deleteQuestion={removeQuestion}/>) :
                    question.type == "TRUE_FALSE" && question.editing ? (<TrueFalseEditor question={question} updateQuestion={saveUpdates}/>):
                    question.type == "TRUE_FALSE" && !question.editing ? (<TrueFalsePreview question={question} updateQuestion={saveUpdates} deleteQuestion={removeQuestion}/>) :
                    question.type == "FILL_IN_BLANK" && !question.editing ? (<FillInPreview question={question} updateQuestion={saveUpdates} deleteQuestion={removeQuestion}/>) :
                    <FillInEditor question={question} updateQuestion={saveUpdates}/>
                ))}
        </div>
    );
}

