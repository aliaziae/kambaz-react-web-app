import { FormGroup, FormLabel, FormControl, FormSelect, Form } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor" className="mb-5 p-3">
            <form>
                <FormGroup className="mb-4" controlId="wd-assignment-name">
                    <FormLabel for="inputName">Assignment Name</FormLabel>
                    <FormControl type="text" value="A1" id="inputName" />
                </FormGroup>
                <FormGroup className="mb-4" controlId="wd-assignment-description">
                    <FormControl as="textarea" rows={10}
                        value="This assignment is available online" />
                </FormGroup>
                <FormGroup className="mb-4 d-flex justify-content-end" controlId="wd-assignment-points">
                    <FormLabel for="inputPoints" class="col-sm-3 col-form-label d-flex justify-content-end me-3">
                        Points</FormLabel>
                    <div className="col-sm-6">
                        <FormControl type="text"
                            value="100" id="inputPoints" />
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
                            <FormControl type="date" value="2024-05-13" id="dueDate" />
                        </FormGroup>
                        <FormGroup className="row mb-4">
                            <div className="col col-6">
                                <FormLabel for="availableFrom">Available From</FormLabel>
                                <FormControl type="date" value="2024-05-06" id="availableFrom" />
                            </div>
                            <div className="col col-6">
                                <FormLabel for="availableUntil">Until</FormLabel>
                                <FormControl type="date" id="availableUntil" />
                            </div>
                        </FormGroup>
                    </div>
                </FormGroup>
                <br/>
                <hr />
                <div className="float-end">
                    <button className="btn btn-l border-dark">Cancel</button>
                    <button className="btn btn-l btn-danger m-3">Save</button>
                </div>
            </form>
        </div>
    );
}

