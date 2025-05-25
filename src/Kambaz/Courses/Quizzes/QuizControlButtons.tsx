import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateQuiz } from "./reducer";
import { GoXCircleFill } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { deleteQuiz } from "./reducer"

export default function QuizControlButtons({ quiz, cid }:
    { quiz: any; cid: string }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // navigates to the edit quiz screen
    const editQuiz = () => {
        navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`, { state: cid });
    };

    // publishes or unpublishes the quiz
    const changePublished = () => {
        if (!quiz.published) {
            const newQuiz = { ...quiz, published: true };
            dispatch(updateQuiz(newQuiz));
        } else {
            const newQuiz = { ...quiz, published: false };
            dispatch(updateQuiz(newQuiz));
        }
    };

    // publishes or unpublishes the quiz
    const publishedVal = () => {
        if (!quiz.published) {
            return "Publish"
        } else {
            return "Unpublish"
        }
    };

    // returns x or check icon depending on if quiz is published
    const publishedIcon = () => {
        if (!quiz.published) {
            return <span className="me-1 position-relative">
            <GoXCircleFill style={{ top: "2px" }} className="text-danger me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
          </span>
        } else {
            return <GreenCheckmark/>
        }
    };

        // deletes the quiz
        const removeQuiz = () => {
            dispatch(deleteQuiz(quiz._id));
        };

    return (
        <div className="float-end">
            {publishedIcon()}
            <Dropdown className="float-end me-2">
                <Dropdown.Toggle variant="secondary" size="sm" id="wd-toggle-menu-btn">
                    <IoEllipsisVertical className="fs-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={editQuiz} id="wd-edit">
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={removeQuiz} id="wd-delete">
                        Delete
                    </Dropdown.Item>
                    <Dropdown.Item onClick={changePublished} id="wd-publish">
                        {publishedVal()}
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-copy">
                        Copy
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-sort">
                        Sort
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>);
}

