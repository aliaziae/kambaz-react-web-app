import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentControls() {

    const { cid } = useParams();
    const navigate = useNavigate();
    const addAssignment = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments/NewAssignment`, {state: cid});
    };

    return (
        <div id="wd-assignment-controls">
            <div id="wd-assignment-control-buttons" className="text-nowrap">
                <Button onClick={addAssignment}
                    variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
                <InputGroup size="lg" className="mb-3 float-start w-25" id="wd-assignments-search-bar">
                    <InputGroup.Text> <FaSearch /> </InputGroup.Text>
                    <FormControl placeholder="Search" />
                </InputGroup>
            </div>
        </div>
    );
}

