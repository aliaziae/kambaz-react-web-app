import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import DeleteAssignment from "./DeleteAssignmentPopup";

export default function AssignmentControlButtons({ assignmentId }:
  { assignmentId: string; }) {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <Button variant="danger" id="wd-delete-assignment-btn"  onClick={handleShow} >
       <FaTrash className="position-relative me-2" style={{ bottom: "1px" }} />
     </Button>
     <DeleteAssignment show={show} handleClose={handleClose} dialogTitle="Delete Assignment"
       assignmentId = {assignmentId} />
    </div> );}

