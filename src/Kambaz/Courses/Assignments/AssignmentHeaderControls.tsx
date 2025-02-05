import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function AssignmentHeaderControls() {
  return (
    <div className="float-end">
        <Button variant="outline-dark" size="sm"
        className="rounded">
        40% of Total
        </Button>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div> );}

