import { FormGroup, FormLabel, FormControl, FormSelect, Form, Button } from "react-bootstrap";
import { useState } from "react";


export default function TrueFalseEditor({ question, updateQuestion }: {
    question: any
    updateQuestion: (question: any) => void
}) {

    const [_id, setQuestionId] = useState("");
    const [title, setQuestionTitle] = useState("");
    const [course, setQuestionCourse] = useState("");
    const [type, setQuestionType] = useState("");
    const [questionBody, setQuestionQuestion] = useState("");
    const [points, setQuestionPoints] = useState(0);
    const [quizId, setQuestionQuizId] = useState(0);
    const [answerOptions, setQuestionAnswerOptions] = useState([{}]);
    const [correctAnswer, setQuestionCorrectAnswer] = useState({
        "_id": "",
        "answer": true
    });
    const [editing, setQuestionEditing] = useState(true);

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

    const isCorrectAnswer = (answer: any) => {
        return answer._id == correctAnswer._id;
    }

    const save = () => {
        setQuestionEditing(false);
        const newQuestion = {_id, title, course, type, questionBody, points, quizId, answerOptions, correctAnswer, editing};
        {updateQuestion(newQuestion)};
    }

    const cancel = () => {
        const newQuestion = question;
        newQuestion.editing = false;
        {updateQuestion(newQuestion)};
    }

    return (
        <div id="wd-true-false-editor" className="mb-4 p-4 border border-medium rounded-4">
            <form>
                <FormGroup controlId="wd-submission-type">
                    <div>
                        <FormGroup className="row mb-4">
                            <div className="col col-4">
                                <FormControl type="text" defaultValue="Title" value={title} id="title"
                                    onChange={(e) => setQuestionTitle(e.target.value)} />
                            </div>
                            <div className="col col-4">
                                <FormSelect id="questionType">
                                    <option selected>True false</option>
                                    <option>Multiple choice</option>
                                    <option>Fill in the Blank</option>
                                </FormSelect>
                            </div>
                            <div className="col col-2">
                                <FormLabel for="points">pts:</FormLabel>
                            </div>
                            <div className="col col-2">
                                <FormControl type="text" defaultValue="" value={points} id="points"
                                    onChange={(e) => setQuestionPoints(parseInt(e.target.value))} />
                            </div>
                            <p className="mt-3">Enter your question text, then select if True or False is the correct answer.</p>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="question"><strong>Question:</strong></FormLabel>
                            <FormControl as="textarea" rows={5}
                                placeholder="Question"
                                value={questionBody}
                                onChange={(e) => setQuestionQuestion(e.target.value)} />
                        </FormGroup>
                        <p className="mt-3"><strong>Answers</strong></p>
                        <FormGroup>
                                <Form.Check type="radio" id="true" label="True" checked={isCorrectAnswer({"_id": "1", "answer": true})}
                                    onChange={() => setQuestionCorrectAnswer({"_id": "1", "answer": true})} className="mx-4 my-3" />
                                <Form.Check type="radio" id="false" label="False" checked={isCorrectAnswer({"_id": "2", "answer": false})}
                                    onChange={() => setQuestionCorrectAnswer({"_id": "2", "answer": false})} className="mx-4" />
                        </FormGroup>
                        <div className="d-flex justify-content-end">
                        </div>
                        <div className="d-flex justify-content-start mt-4">
                        <Button className="me-2" onClick={cancel} variant="danger">
                                Cancel
                            </Button>
                            <Button onClick={save} variant="success">
                                Save
                            </Button>
                        </div>
                    </div>
                </FormGroup>
                <br />
            </form>
        </div>
    );
}

