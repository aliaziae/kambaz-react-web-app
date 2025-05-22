import { Col, ListGroup, Row } from "react-bootstrap";
import { Route, Routes, useNavigate, useParams } from "react-router";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import FacultyOnly from "../../Account/FacultyOnly";
import Editor from "./Editor";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { useEffect } from "react";
import { setAssignments } from "./reducer";


export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // navigates to the edit assignment screen when the pencil button is pressed
  const editAssignment = (assignmentId: string) => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`, { state: cid });
  };

  // fetches all of the assignments upon load
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


  return (
    <div>
      <FacultyOnly>
        <AssignmentControls /><br /><br /><br /><br />
      </FacultyOnly>
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-header list-group-item fs-5 p-3 ps-2 bg-secondary border-gray">
          <FacultyOnly>
            <BsGripVertical className="me-2 fs-3" />
          </FacultyOnly>
          <IoMdArrowDropdown />
          ASSIGNMENTS
          <FacultyOnly>
            <AssignmentHeaderControls />
          </FacultyOnly>
        </li>
        {assignments
          .map((assignment: any) => (
            <ListGroup.Item className={`wd-assignment p-3 ps-1`} >
              <Row>
                <FacultyOnly>
                  <Col data-valign="center" className="col-2 p-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <BsPencilSquare onClick={() => editAssignment(assignment._id)} color="green" className="me-2 fs-3" />
                  </Col>
                </FacultyOnly>
                <Col className="col-8 p-3">
                  <h4>{assignment.title}</h4>
                  <small className="text-secondary"> <span className="text-danger">Multiple Modules </span>
                    | <strong> Not available until
                    </strong> {assignment.availableFrom} | <strong>Due</strong> {assignment.due} | {assignment.points} points</small>
                </Col>
                <FacultyOnly>
                  <Col className="col-2 p-3">
                    <AssignmentControlButtons assignmentId={assignment._id} />
                  </Col>
                </FacultyOnly>
              </Row>
            </ListGroup.Item>
          ))}</ul>
      <Routes>
        <Route path="/newAssignment" element={<Editor />} />
      </Routes>
    </div>
  );
}

