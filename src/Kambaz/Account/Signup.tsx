import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-3">
      <h1>Sign Up</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/><br />
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/><br />
      <Link id="wd-signup-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign Up </Link><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Sign in</Link>
    </div> 
);}

