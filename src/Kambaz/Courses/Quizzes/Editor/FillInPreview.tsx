import { FormGroup, FormLabel, FormControl,InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function FillInPreview({ question, updateQuestion, deleteQuestion }: {
    question: any
    updateQuestion: (question: any) => void
    deleteQuestion: (qid: string) => void
}) {


    const [_id, setQuestionId] = useState("");
    const [title, setQuestionTitle] = useState("");
    const [course, setQuestionCourse] = useState("");
    const [type, setQuestionType] = useState("");
    const [questionBody, setQuestionQuestion] = useState("");
    const [points, setQuestionPoints] = useState(0);
    const [quizId, setQuestionQuizId] = useState("");
    const [answerOptions, setQuestionAnswerOptions] = useState([{}]);
    const [correctAnswer, setQuestionCorrectAnswer] = useState({
        "_id": "",
        "answer": ""
    });
    const [editing, setQuestionEditing] = useState(false);


    if (question && _id === "") {
        setQuestionId(question._id);
        setQuestionTitle(question.title);
        setQuestionCourse(question.course);
        setQuestionType(question.type);
        setQuestionQuestion(question.questionBody);
        setQuestionPoints(question.points);
        setQuestionQuizId(question.quizId);
        setQuestionAnswerOptions(question.answerOptions);
        setQuestionCorrectAnswer(question.correctAnswer);
        setQuestionEditing(question.editing);
    };

    const sendQuestionUpdates = () => {
        const newQuestion = { _id, title, course, type, questionBody, points, quizId, answerOptions, correctAnswer, editing };
        { updateQuestion(newQuestion) };
    }

    const editQuestion = () => {
        setQuestionEditing(true);
        sendQuestionUpdates();
    }

    return (
        <div id="wd-multiple-choice-preview" className="mb-4 p-4 border border-medium rounded-4">
            <div className="row">
                <h4>{title}</h4>
            </div>
            <br />
            <p>{questionBody}</p>
            <hr />
            <FormGroup>
                <InputGroup id="wd-answers" className="mb-3 mt-3">
                    <FormLabel className="my-1" for="answer-input">Enter answer:</FormLabel>
                    <FormControl className="mx-3" type="text" defaultValue="" id="answer-input" />
                </InputGroup>
            </FormGroup>
            <div className="d-flex justify-content-end mt-5">
                <Button className="me-2" onClick={editQuestion} variant="secondary">
                    Edit Question
                </Button>
                <Button onClick={() => {deleteQuestion(_id)}} variant="danger">
                    Delete
                </Button>
            </div>
            <br />
        </div>
    );
}

