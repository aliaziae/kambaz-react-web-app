import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addQuiz } from "./reducer"

export default function QuizControls({cid}: {cid: string;}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // creates a new quiz with default values and navigate to the details screen
    const newQuiz = () => {
        const newQuiz: any = {
            _id: uuidv4(),
            title: "New Quiz",
            course: `${cid}`,
            description: "",
            type: "Graded Quiz",
            points: "",
            group: "QUIZZES",
            shuffleAnswers: true,
            timeLimit: "20",
            multipleAttempts: false,
            accessCode: "",
            oneQuestionAtTime: true,
            webcam: false,
            lockQuestions: false,
            dueDate: "",
            availableDate: "",
            untilDate: "",
            published: false
        };
        dispatch(addQuiz(newQuiz));
        navigate(`/Kambaz/Courses/${cid}/Quizzes/${newQuiz._id}/Details`, { state: cid });
    };

    return (
        <div id="wd-quiz-controls">
            <div id="wd-quiz-control-buttons" className="text-nowrap">
                <Button
                    variant="danger" onClick={newQuiz} size="lg" className="me-1 float-end" id="wd-add-quiz-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Quiz
                </Button>
                <InputGroup size="lg" className="mb-3 float-start w-25" id="wd-quiz-search-bar">
                    <InputGroup.Text> <FaSearch /> </InputGroup.Text>
                    <FormControl placeholder="Search for quiz" />
                </InputGroup>
            </div>
        </div>
    );
}

