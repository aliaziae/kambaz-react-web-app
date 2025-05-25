import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function NavigationTabs({cid, qid}: {
    cid: string; qid: any
  }) {

    const { pathname } = useLocation();

    return (
        <div id="wd-quiz-editor" className="mb-5 p-3">
            <div id="wd-quiz-editor-tabs">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Details`}
                        active={pathname.includes("Details")}>Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Questions`}
                        active={pathname.includes("Questions")}>Questions</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}

