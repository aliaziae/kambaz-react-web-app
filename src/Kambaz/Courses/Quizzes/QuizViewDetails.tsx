import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuPencil } from "react-icons/lu";
import FacultyOnly from "../../Account/FacultyOnly";

export default function QuizDetails() {
    // get current quiz if any
    const { qid } = useParams();

    const navigate = useNavigate();

    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const currentQuiz = quizzes.find((quiz: any) => quiz._id == qid);
    const cid = currentQuiz.course;

    const determineYesNo = (check: any) => {
        if (check) {
            return "Yes";
        } else {
            return "No";
        }
    }

    const editQuiz = () => {
        navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Details`, { state: cid });
    }


    return (
        <div id="wd-quiz-details" className="mb-5 p-3">
            <div id="wd-quiz-control-buttons" className="text-nowrap">
                <FacultyOnly>
                    <Button
                        variant="secondary" onClick={editQuiz} size="lg" className="me-1 float-end" id="wd-add-quiz-btn">
                        <LuPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                        Edit
                    </Button>
                    <Button
                        variant="secondary" size="lg" className="me-1 float-end" id="wd-add-quiz-btn">
                        Preview
                    </Button>
                </FacultyOnly>
            </div>
            <h3> {currentQuiz.title} </h3>
            <br />
            <hr />
            <div id="quiz-info" className="mb-4">
            <div id="quiz-info-student" className="mb-4 d-flex  justify-content-center">
                <Button
                    variant="danger" size="lg" className="me-1 d-flex justify-content-center" id="wd-start-quiz-btn">
                    Start Quiz
                </Button>
                </div>
                <FacultyOnly>
                <Row className="d-flex justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Quiz Type</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {currentQuiz.type}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Points</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {currentQuiz.points}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Assignment Group</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {currentQuiz.group}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Shuffle Answers</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {determineYesNo(currentQuiz.shuffleAnswers)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Time Limit</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {currentQuiz.timeLimit} Minutes
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Multiple Attempts</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {determineYesNo(currentQuiz.multipleAttempts)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Access Code</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {currentQuiz.accessCode}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>One Question at a Time</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {determineYesNo(currentQuiz.oneQuestionAtTime)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Webcam Required</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {determineYesNo(currentQuiz.webcam)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-end">
                        <strong>Lock Questions After Answering</strong>
                    </Col>
                    <Col className="col-6 d-flex justify-content-left">
                        {determineYesNo(currentQuiz.lockQuestions)}
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col className="col-3 d-flex justify-content-left">
                        <strong>Due</strong>
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        <strong>For</strong>
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        <strong>Available From</strong>
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        <strong>Until</strong>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="col-3 d-flex justify-content-left">
                        {currentQuiz.dueDate}
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        Everyone
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        {currentQuiz.availableFrom}
                    </Col>
                    <Col className="col-3 d-flex justify-content-left">
                        {currentQuiz.availableUntil}
                    </Col>
                </Row>
                </FacultyOnly>
            </div>
        </div>
    );
}

