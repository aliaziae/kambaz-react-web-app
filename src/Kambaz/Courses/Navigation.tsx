import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  //current course id
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Courses/${cid}/${link}`} className={`text-left border-0
              ${pathname.includes(link) ? "text-black bg-white" : "text-danger bg-white"}`}>
          {link}
        </ListGroup.Item>
      ))}
    </div>
  );
}

