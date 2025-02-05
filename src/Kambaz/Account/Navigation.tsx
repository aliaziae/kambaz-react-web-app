import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    <Link to="/Kambaz/Account/Signin" id="wd-signin-link"
      className="list-group-item active border border-0">Sign in</Link>
    <Link to="/Kambaz/Account/Signup" id="wd-signup-link"
      className="list-group-item text-danger border border-0">Sign up</Link>
    <Link to="/Kambaz/Account/Profile" id="wd-profile-link"
      className="list-group-item text-danger border border-0">Profile</Link>
  </div>
);}

