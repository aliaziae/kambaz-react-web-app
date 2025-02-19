import { Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();

  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-header list-group-item fs-5 p-3 ps-2 bg-secondary border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <IoMdArrowDropdown />
          ASSIGNMENTS <AssignmentHeaderControls />
        </li>
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
          <ListGroup.Item as={Link} to={`${pathname}/${assignment._id}`} className={`wd-assignment p-3 ps-1`} >
              <Row>
                <Col data-valign="center" className="col-2 p-3">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsPencilSquare color="green" className="me-2 fs-3" />
                </Col>
                <Col className="col-8 p-3">
                  <h4>{assignment.title}</h4>
                  <small className="text-secondary"> <span className="text-danger">Multiple Modules </span>
                    | <strong> Not available until
                    </strong> May 6 at 12:00am | <strong>Due</strong> May 13
                    at 11:59pm | 100 pts</small>
                </Col>
                <Col className="col-2 p-3">
                  <AssignmentControlButtons />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}</ul>
    </div>
  );
}

