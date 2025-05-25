import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";
import FacultyOnly from "../../Account/FacultyOnly";
import { useSelector } from "react-redux";
import QuizControls from "./QuizControls";
import { IoRocketOutline } from "react-icons/io5";
import QuizControlButtons from "./QuizControlButtons";


export default function Quizzes() {
  const { cid } = useParams(); 
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const quizDetails = (quizId: string) => {
    navigate(`${pathname}/${quizId}/Info`, { state:{cid}});
  }


  return (
    <div>
      <FacultyOnly>
        <QuizControls cid = {`${cid}`}/><br /><br /><br /><br />
      </FacultyOnly>
      <ul id="wd-quizzes" className="list-group rounded-0">
        <li className="wd-quizzes-header list-group-item fs-5 p-3 ps-2 bg-secondary border-gray">
          <IoMdArrowDropdown />
          Assignment Quizzes
        </li>
        {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => (
            <ListGroup.Item className={`wd-assignment p-3 ps-1`} >
              <Row>
                <FacultyOnly>
                  <Col data-valign="center" className="col-1 p-3">
                    <Button variant="outline-light" onClick={() => quizDetails(quiz._id)}>
                    <IoRocketOutline color="green" className="me-2 fs-3" />
                    </Button>
                  </Col>
                </FacultyOnly>
                <Col className="col-9 p-3">
                  <h4 >{quiz.title}</h4>
                  <small className="text-secondary"> <span className="text-danger"> CLOSED </span>
                  | <strong>Due</strong> {quiz.dueDate} | {quiz.points} points</small>  |  <strong> Questions </strong>
                </Col>
                <FacultyOnly>
                  <Col className="col-2 p-3">
                    <QuizControlButtons quiz={quiz} cid={quiz.course} />
                  </Col>
                </FacultyOnly>
              </Row>
            </ListGroup.Item>
          ))}</ul>
    </div>
  );
}

