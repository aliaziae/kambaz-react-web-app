import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./Dashboard/enrollmentsClient";


export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);


  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await enrollmentClient.fetchAllEnrollments();
      setEnrollments(enrollments);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
    const enrollments = await enrollmentClient.fetchAllEnrollments();
    setEnrollments(enrollments);
  };

  const addEnrollment = async (course: any) => {
    const newEnrollment = await userClient.addEnrollment(course);
    setEnrollments([ ...enrollments, newEnrollment ]);
  };

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const deleteEnrollment = async (courseId: any) => { 
    const enrollment = enrollments.find((e) => e.user == currentUser._id && e.course == courseId)
    const status = await enrollmentClient.deleteEnrollment(enrollment._id);
    setEnrollments(enrollments.filter((e) => e._id !== enrollment._id));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <Session>
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
            courses={courses}
            enrollments = {enrollments}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            addNewEnrollment={addEnrollment}
            deleteEnrollment = {deleteEnrollment}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} /></ProtectedRoute>} />

          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}

