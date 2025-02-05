import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <h1>Profile</h1>
      <FormControl id="wd-username"
        placeholder="username"
        value="alice"
        className="mb-2" /><br />
      <FormControl id="wd-password"
        placeholder="password" type="password"
        value="123"
        className="mb-2" /><br />
      <FormControl id="wd-firstname"
        placeholder="first name"
        value="Alice"
        className="mb-2" /><br />
      <FormControl id="wd-lastname"
        placeholder="last name"
        value="Wonderland"
        className="mb-2" /><br />
      <FormControl id="wd-dob"
        type="date"
        className="mb-2" /><br />
      <FormControl id="wd-email"
        placeholder="email"
        type="email"
        value="alice@wonderland.com"
        className="mb-2" /><br />
      <select className="form-control mb-2" id="wd-role">
        <option>User</option>
        <option>Admin</option>
        <option>Faculty</option>
      </select>
      <br />
      <Link id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2 ">
        Sign out </Link><br />
    </div>
  );
}