import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";


export default function DeleteAssignment({ show, handleClose, dialogTitle, assignmentId }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string;
}) {

    const dispatch = useDispatch();

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this assignment?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="primary"
                    onClick={() => {
                        dispatch(deleteAssignment(assignmentId));
                        handleClose();
                    }} > Yes </Button>
            </Modal.Footer>
        </Modal>
    );
}

