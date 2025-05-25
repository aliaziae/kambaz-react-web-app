import { FormGroup, FormLabel, FormControl, FormSelect,InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";


export default function FillInEditor({ question, updateQuestion }: {
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
        { setQuestionAnswerOptions(newOptions) }
    }

    const save = () => {
        setQuestionEditing(false);
        const newQuestion = { _id, title, course, type, questionBody, points, quizId, answerOptions, correctAnswer, editing };
        { updateQuestion(newQuestion) };
    }

    const cancel = () => {
        const newQuestion = question;
        newQuestion.editing = false;
        { updateQuestion(newQuestion) };
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
                                <FormSelect id="questionType" >
                                    <option value="FILL_IN_BLANK" selected>Fill in the blank</option>
                                    <option value="TRUE_FALSE">True false</option>
                                    <option value="MULTIPLE_CHOICE">Multiple Choice</option>
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
                        <p>Enter your question text, then define all possible correct answers for the blank.
                            Students will see the question followed by a small text box to type their answer.
                        </p>
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
                                    <FormLabel className="my-1" for="answer-input">Possible answer:</FormLabel>
                                    <FormControl className="mx-3" type="text" defaultValue="" value={answer.answer} id="answer-input"
                                        onChange={(e) => updateAnswerOptions(answer, e.target.value)} />
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

