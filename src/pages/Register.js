import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerAction } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.users);

  useEffect(() => {
    if (isAuth) navigate("/");
  },[isAuth,navigate]);

  const inputInfo = (data) => {
    console.log(data);
    dispatch(registerAction(data));
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Back to{" "}
            <Link to="/" className="link-primary">
              Home
            </Link>
          </div>
          <div className="text-center">
            Already registered?
            <Link to="/signin" className="link-primary">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jann"
              {...register("username", { required: true })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "You should use a valid email",
                },
              })}
            />
            <p className="text-center mt-2">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 10,
                  message: "Password should be 10 characters at least",
                },
              })}
            />
            <p className="text-center mt-2">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={handleSubmit(inputInfo)}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            {/* eslint-disable-next-line */}
            <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
