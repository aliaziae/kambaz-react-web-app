import { FormGroup, FormLabel, FormControl, FormSelect, Form } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, editAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    // get current assignment if any
    const { aid } = useParams();
    const editing = aid !== "NewAssignment";

    const dispatch = useDispatch();

    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const currentAssignment = assignments.find((assignment: any) => assignment._id == aid);

    // get CID that user was on 
   const { state } = useLocation();
    const cid = state;

    const [_id, setAssignmentId] = useState("");
    const [title, setAssignmentTitle] = useState("");
    const [course] = useState("");
    const [description, setAssignmentDescription] = useState("");
    const [points, setAssignmentPoints] = useState(0);
    const [due, setAssignmentDue] = useState("");
    const [availableFrom, setAssignmentAvailFrom] = useState("");
    const [availableUntil, setAssignmentAvailUntil] = useState("");

    if (currentAssignment && _id === "") {
        setAssignmentId(currentAssignment._id);
        setAssignmentTitle(currentAssignment.title);
        setAssignmentDescription(currentAssignment.description);
        setAssignmentPoints(currentAssignment.points);
        setAssignmentDue(currentAssignment.due);
        setAssignmentAvailFrom(currentAssignment.availableFrom);
        setAssignmentAvailUntil(currentAssignment.availableUntil);
      };

      const save = () =>{
        const assignment = {_id, title, description, points, due, availableFrom, availableUntil, course};
        assignment.course = cid
        if(!editing){
          dispatch(addAssignment(assignment));
        }
        else{
          dispatch(editAssignment(aid));
          dispatch(updateAssignment(assignment));
          dispatch(updateAssignment({ ...assignment, editing: false }));
        }
    }

    return (
        <div id="wd-assignment-editor" className="mb-5 p-3">
            <form>
                <FormGroup className="mb-4" controlId="wd-assignment-name">
                    <FormControl type="text" placeholder="Assignment title" value={title} id="inputName"
                    onChange={(e) => setAssignmentTitle(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-4" controlId="wd-assignment-description">
                    <FormControl as="textarea" rows={10}
                        placeholder="Assignment description"
                        value={description} 
                        onChange={(e) => setAssignmentDescription(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-assignment-points">
                    <FormLabel for="inputPoints" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Points</FormLabel>
                    <div className="col-sm-6">
                        <FormControl type="text" placeholder=""
                            value={points} id="inputPoints"
                            onChange={(e) => setAssignmentPoints(Number(e.target.value))} />
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-assignment-group">
                    <FormLabel for="assignmentGroup" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Assignment Group</FormLabel>
                    <div className="col-sm-6">
                        <FormSelect id="assignmentGroup">
                            <option selected>ASSIGNMENT</option>
                            <option>QUIZ</option>
                            <option>DISCUSSION</option>
                        </FormSelect>
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-assignment-display-grade-as">
                    <FormLabel for="displayGradeAs" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Display Grade As</FormLabel>
                    <div className="col-sm-6">
                        <FormSelect id="displayGradeAs">
                            <option selected>Percentage</option>
                            <option>Letter</option>
                            <option>Points</option>
                        </FormSelect>
                    </div>
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-submission-type">
                    <FormLabel for="submissionType" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Submission Type</FormLabel>
                    <div className="col-sm-6 border border-medium p-3 rounded-4">
                        <FormSelect id="submissionType" className="mb-4">
                            <option selected>Online</option>
                            <option>In Person</option>
                        </FormSelect>
                        Online Submission Options
                        <Form.Check id="textEntry" label="Text Entry" className="mt-2 mb-3" />
                        <Form.Check id="websiteURL" label="Website URL" checked={true} className="mb-3" />
                        <Form.Check id="mediaRecordings" label="Media Recordings" className="mb-3" />
                        <Form.Check id="studentAnnotations" label="Student Annotations" className="mb-3" />
                        <Form.Check id="fileUploads" label="File Uploads" className="mb-3" />
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
                            onChange={(e) => setAssignmentDue(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                            <div className="col col-6">
                                <FormLabel for="availableFrom">Available From</FormLabel>
                                <FormControl type="date" defaultValue="2025-05-16" value={availableFrom} id="availableFrom" 
                                onChange={(e) => setAssignmentAvailFrom(e.target.value)}/>
                            </div>
                            <div className="col col-6">
                                <FormLabel for="availableUntil">Until</FormLabel>
                                <FormControl type="date" defaultValue="2025-05-16" value={availableUntil} id="availableUntil"
                                onChange={(e) => setAssignmentAvailUntil(e.target.value)}/>
                            </div>
                        </FormGroup>
                    </div>
                </FormGroup>
                <br />
                <hr />
                <div className="float-end">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                        <button
                            className="btn btn-l border-dark">Cancel</button>
                    </Link>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                        <button onClick={save} className="btn btn-l btn-danger m-3">Save</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

