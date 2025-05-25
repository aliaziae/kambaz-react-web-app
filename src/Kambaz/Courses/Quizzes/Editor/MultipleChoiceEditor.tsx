import { FormGroup, FormLabel, FormControl, FormSelect, Form, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";


export default function MultipleChoiceEditor({ question, updateQuestion }: { question: any 
    updateQuestion: (question: any) => void }) {



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
        "answer": ""
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

    const updateAnswerOptions = (oldAnswer: any, newAnswer: string) => {
        const answerJson = {
            "_id": uuidv4(),
            "answer": newAnswer
        }
        const newAnswerOptions = answerOptions.map((a: any) =>
        a._id === oldAnswer._id ? answerJson : a
              ) as any;
        setQuestionAnswerOptions(newAnswerOptions);
    }

    const isCorrectAnswer = (answer: any) => {
        return answer._id == correctAnswer._id;
    }

    const deleteAnswerOptions = (answer: any) => {
        setQuestionAnswerOptions(answerOptions.filter(
            (a: any) => a._id !== answer._id));
    }

    const addAnswerOption = () => {
        const newAnswer = {
            "_id": uuidv4(),
            "answer": ""
        }
        const newOptions = [...answerOptions, newAnswer];
        {setQuestionAnswerOptions(newOptions)}
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
        <div id="wd-multiple-choice-editor" className="mb-4 p-4 border border-medium rounded-4">
            <form>
                <FormGroup controlId="wd-submission-type">
                    <div >
                        <FormGroup className="row mb-4">
                            <div className="col col-4">
                                <FormControl type="text" defaultValue="Title" value={title} id="title"
                                    onChange={(e) => setQuestionTitle(e.target.value)} />
                            </div>
                            <div className="col col-4">
                                <FormSelect id="questionType">
                                    <option selected>Multiple Choice</option>
                                    <option>True false</option>
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
                        </FormGroup>
                        <p>Enter your question and multiple answers, then select the one correct answer.</p>
                        <FormGroup>
                            <FormLabel for="question"><strong>Question:</strong></FormLabel>
                            <FormControl as="textarea" rows={5}
                                placeholder="Question"
                                value={questionBody}
                                onChange={(e) => setQuestionQuestion(e.target.value)} />
                        </FormGroup>
                        <p className="mt-3"><strong>Answers</strong></p>
                        {answerOptions.map((answer: any) => (
                            <FormGroup>
                                <InputGroup id="wd-answers" className="mb-3 mt-3">
                                    <Form.Check type="radio" id="possibleAnswerCheck" label="Possible Answer" checked={isCorrectAnswer(answer)}
                                        onChange={() => setQuestionCorrectAnswer(answer)} className="mx-4 my-2" />
                                    <FormControl type="text" defaultValue="" value={answer.answer} id="possibleAnswer"
                                        onChange={(e) => updateAnswerOptions(answer, e.target.value)} className="mx-4 mb-1" />
                                    <FaTrash className="text-secondary mx-2 my-2" onClick={() => deleteAnswerOptions(answer)} />
                                </InputGroup>
                            </FormGroup>
                        ))}
                        <div className="d-flex justify-content-end">
                            <Button onClick={addAnswerOption} variant="light">
                                Add Another Answer
                            </Button>
                        </div>
                        <div className="d-flex justify-content-start">
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

