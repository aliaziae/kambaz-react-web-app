import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment-header p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
             ASSIGNMENTS
            <AssignmentHeaderControls /> </div>
          <ListGroup className="wd-list-assignments rounded-0">
            <ListGroup.Item className="wd-assignment p-3 ps-1">
              <Row>
              <Col data-valign="center" className="col-2 p-3">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare color="green" className="me-2 fs-3"/>
              </Col>
              <Col className="col-8 p-3">
              <h4><a href="#/Kambaz/Courses/1234/Assignments/1"
               className="wd-assignment-link" >A1</a></h4>
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
             <ListGroup.Item className="wd-assignment p-3 ps-1">
              <Row>
              <Col data-valign="center" className="col-2 p-3">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare color="green" className="me-2 fs-3"/>
              </Col>
              <Col className="col-8 p-3">
              <h4> <a href="#/Kambaz/Courses/1234/Assignments/2"
               className="wd-assignment-link" >A2</a></h4>
              <small className="text-secondary"> <span className="text-danger">Multiple Modules </span>
              | <strong> Not available until 
              </strong> May 13 at 12:00am | <strong>Due</strong> May 20
              at 11:59pm | 100 pts</small>
              </Col>
              <Col className="col-2 p-3">
              <AssignmentControlButtons />
              </Col>
              </Row>
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment p-3 ps-1">
              <Row>
              <Col data-valign="center" className="col-2 p-3">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare color="green" className="me-2 fs-3"/>
              </Col>
              <Col className="col-8 p-3">
              <h4><a href="#/Kambaz/Courses/1234/Assignments/3"
               className="wd-assignment-link" >A3</a></h4>
              <small className="text-secondary"> <span className="text-danger">Multiple Modules </span>
              | <strong> Not available until 
              </strong> May 20 at 12:00am | <strong>Due</strong> May 27
              at 11:59pm | 100 pts</small>
              </Col>
              <Col className="col-2 p-3">
              <AssignmentControlButtons />
              </Col>
              </Row>
             </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

