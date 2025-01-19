import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpeg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/artpalette.jpeg" width={200} />
            <div>
              <h5> ARTG4550 </h5>
              <p className="wd-dashboard-course-title">
                Design degree project  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/4554/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/typography.png" width={200} />
            <div>
              <h5> ARTG4554 </h5>
              <p className="wd-dashboard-course-title">
                Typography 3  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/2300/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algorithms.jpeg" width={200} />
            <div>
              <h5> CS2300 </h5>
              <p className="wd-dashboard-course-title">
                Algorithms  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1100/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/shakespeare.jpeg" width={200} />
            <div>
              <h5> ENG1100 </h5>
              <p className="wd-dashboard-course-title">
                Shakespeare  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/7000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/chemistry.jpeg" width={200} />
            <div>
              <h5> SCI7000 </h5>
              <p className="wd-dashboard-course-title">
                Chemistry  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/5000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/worldhistory.jpeg" width={200} />
            <div>
              <h5> HIS5000 </h5>
              <p className="wd-dashboard-course-title">
                World history  </p>
              <button> Go </button>
            </div>
          </Link> 
         </div>
      </div>
    </div>
);}
