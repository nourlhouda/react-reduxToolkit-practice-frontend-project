import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.users);
  const location = useLocation();

  const hideNavbar =
    location.pathname.includes("/signin") ||
    location.pathname.includes("/signup");

  if (hideNavbar) {
    return null; // Hide the Navbar on Signin and Signup pages
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        {!isAuth ? (
          <>
            <li className="navbar-item">
              <Link to="/signin" className="navbar-link">
                Sign in
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="navbar-link">
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link
                to="/signin"
                className="navbar-link"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/posts" className="navbar-link">
                Posts
              </Link>
            </li>
          </>
        )}

        <li className="navbar-item">
          <Link to="/contactus" className="navbar-link">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
