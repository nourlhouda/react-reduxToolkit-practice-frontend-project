import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { errors, isAuth } = useSelector((state) => state.users);
  const { register, handleSubmit } = useForm();
  const loginInput = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth,navigate]);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Back to{" "}
            <Link to="/" className="link-primary">
              Home
            </Link>
          </div>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to="/signup" className="link-primary">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              {...register("email")}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              {...register("password")}
              required
            />
          </div>
          {errors && <p>{errors.message}</p>}
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={handleSubmit(loginInput)}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            {/* eslint-disable-next-line */}
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
