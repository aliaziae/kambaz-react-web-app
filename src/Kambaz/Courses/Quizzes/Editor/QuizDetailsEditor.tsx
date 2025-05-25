import { FormGroup, FormLabel, FormControl, FormSelect, Form, Nav, InputGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateQuiz } from "../reducer";

export default function QuizDetailsEditor() {
    // get current quiz if any
    const { qid } = useParams();

    const dispatch = useDispatch();

    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const currentQuiz = quizzes.find((quiz: any) => quiz._id == qid);
    const cid = currentQuiz.course;


    const [_id, setQuizId] = useState("");
    const [title, setQuizTitle] = useState("");
    const [course, setQuizCourse] = useState("");
    const [description, setQuizDescription] = useState("");
    const [type, setQuizType] = useState("Graded quiz");
    const [points, setQuizPoints] = useState(0);
    const [quizGroup, setQuizGroup] = useState("QUIZZES");
    const [shuffle, setQuizShuffle] = useState(true);
    const [timeLimit, setQuizTimeLimit] = useState(20);
    const [multipleAttempts, setQuizMultipleAttempts] = useState(false);
    const [accessCode, setQuizAccessCode] = useState("");
    const [oneQuestionAtTime, setQuizOneQuestionAtTime] = useState(true);
    const [webcam, setQuizWebcam] = useState(false);
    const [lockQuestions, setQuizLockQuestions] = useState(false);
    const [due, setQuizDueDate] = useState("");
    const [availableFrom, setQuizAvailFrom] = useState("");
    const [availableUntil, setQuizAvailUntil] = useState("");

    if (currentQuiz && _id === "") {
        setQuizId(currentQuiz._id);
        setQuizTitle(currentQuiz.title);
        setQuizDescription(currentQuiz.description);
        setQuizType(currentQuiz.type);
        setQuizPoints(currentQuiz.points);
        setQuizGroup(currentQuiz.group);
        setQuizShuffle(currentQuiz.shuffleAnswers);
        setQuizTimeLimit(currentQuiz.timeLimit);
        setQuizMultipleAttempts(currentQuiz.multipleAttempts);
        setQuizAccessCode(currentQuiz.accessCode);
        setQuizOneQuestionAtTime(currentQuiz.oneQuestionAtTime);
        setQuizWebcam(currentQuiz.webcam);
        setQuizLockQuestions(currentQuiz.lockQuestions);
        setQuizDueDate(currentQuiz.dueDate);
        setQuizAvailFrom(currentQuiz.availableDate);
        setQuizAvailUntil(currentQuiz.availableUntil);
        setQuizCourse(currentQuiz.course);
    };

      const save = () =>{
        const newQuiz = {_id, title, description, type, points, quizGroup, shuffle, timeLimit, 
            multipleAttempts, accessCode, oneQuestionAtTime, webcam, lockQuestions, due, availableFrom, availableUntil, course};
        newQuiz.course = cid;
            console.log({cid});
            dispatch(updateQuiz(newQuiz));
    }

    return (
        <div id="wd-quiz-details-editor" className="mb-5 p-3">
            <form>
                <FormGroup className="mb-4" controlId="wd-quiz-name">
                    <FormControl type="text" placeholder="Quiz title" value={title} id="inputName"
                        onChange={(e) => setQuizTitle(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-4" controlId="wd-quiz-description">
                    <FormControl as="textarea" rows={10}
                        placeholder="Quiz instructions"
                        value={description}
                        onChange={(e) => setQuizDescription(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-quiz-type">
                    <FormLabel for="quizType" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Quiz Type</FormLabel>
                    <div className="col-sm-6">
                        <FormSelect id="quizType">
                            <option selected>Graded Quiz</option>
                            <option>Practice Quiz</option>
                            <option>Graded Survey</option>
                            <option>Ungraded Survey</option>
                        </FormSelect>
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-quiz-group">
                    <FormLabel for="quizGroup" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Assignment Group</FormLabel>
                    <div className="col-sm-6">
                        <FormControl type="text" placeholder=""
                            value={points} id="inputPoints"
                            onChange={(e) => setAssignmentPoints(Number(e.target.value))} />
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-quiz-group">
                    <FormLabel for="quizGroup" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Assignment Group</FormLabel>
                    <div className="col-sm-6">
                        <FormSelect id="quizGroup">
                            <option selected>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>ASSIGNMENTS</option>
                            <option>PROJECT</option>
                        </FormSelect>
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-quiz-options">
                    <FormLabel for="quizOptions" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Options</FormLabel>
                    <div className="col-sm-6">
                        <Form.Check id="shuffleAnswers" label="Shuffle Answers" checked={shuffle}
                            onChange={() => setQuizShuffle(!shuffle)} className="mt-2 mb-3" />
                        <Form.Check id="timeLimit" label="Time Limit" checked={false} className="mt-2 mb-3" />
                        <InputGroup className="mt-2 mb-3">
                            <FormControl type="text" placeholder="Time limit" value={timeLimit} id="inputTimeLimit"
                        onChange={(e) => setQuizTimeLimit(parseInt(e.target.value))}/>
                            <InputGroup.Text>Minutes</InputGroup.Text>
                        </InputGroup>
                        <Form.Check id="multipleAttempts" label="Allow multiple attempts" checked={multipleAttempts} 
                        onChange={() => setQuizMultipleAttempts(!multipleAttempts)} className="mt-2 mb-3" />
                        <Form.Check id="oneAtATime" label="One question at a time" checked={oneQuestionAtTime} 
                        onChange={() => setQuizOneQuestionAtTime(!oneQuestionAtTime)} className="mt-2 mb-3" />
                        <Form.Check id="webcam" label="Webcam required" checked={webcam} 
                        onChange={() => setQuizWebcam(!webcam)} className="mt-2 mb-3" />
                        <Form.Check id="lockQuestions" label="Lock questions after answering" checked={lockQuestions} 
                        onChange={() => setQuizLockQuestions(!lockQuestions)} className="mt-2 mb-3" />
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-submission-type">
                    <FormLabel for="assign" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Assign</FormLabel>
                    <div className="col-sm-6 border border-medium p-3 rounded-4">
                        <FormGroup className="mb-4" controlId="wd-assign-to">
                            <FormLabel for="assignTo">Assign To</FormLabel>
                            <FormControl type="text" value={"Everyone"} id="assignTo" />
                        </FormGroup>
                        <FormGroup className="mb-4" controlId="wd-due-date">
                            <FormLabel for="dueDate">Due</FormLabel>
                            <FormControl type="date" defaultValue="2025-05-16" value={due} id="dueDate"
                                onChange={(e) => setQuizDueDate(e.target.value)} />
                        </FormGroup>
                        <FormGroup className="row mb-4">
                            <div className="col col-6">
                                <FormLabel for="availableFrom">Available From</FormLabel>
                                <FormControl type="date" defaultValue="2025-05-16" value={availableFrom} id="availableFrom"
                                    onChange={(e) => setQuizAvailFrom(e.target.value)} />
                            </div>
                            <div className="col col-6">
                                <FormLabel for="availableUntil">Until</FormLabel>
                                <FormControl type="date" defaultValue="2025-05-16" value={availableUntil} id="availableUntil"
                                    onChange={(e) => setQuizAvailUntil(e.target.value)} />
                            </div>
                        </FormGroup>
                    </div>
                </FormGroup>
                <br />
                <hr />
                <div className="float-end">
                    <Link to={`/Kambaz/Courses/${course}/Quizzes`}>
                        <button
                            className="btn btn-l border-dark">Cancel</button>
                    </Link>
                    <Link to={`/Kambaz/Courses/${course}/Quizzes`}>
                        <button onClick={save} className="btn btn-l btn-danger m-3">Save</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

