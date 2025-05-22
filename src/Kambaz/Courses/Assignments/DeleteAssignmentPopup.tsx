import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client";



export default function DeleteAssignment({ show, handleClose, dialogTitle, assignmentId }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string;
}) {

    const dispatch = useDispatch();

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      };
    

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
                        removeAssignment(assignmentId);
                        handleClose();
                    }} > Yes </Button>
            </Modal.Footer>
        </Modal>
    );
}

