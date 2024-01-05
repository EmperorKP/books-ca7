import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerUser, removeRegisteredUser } from "../../redux/Actions";
import "./Register.css";

function Register({ registerUser, removeRegisteredUser }) {
  const [registration, setRegistration] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    registerUser(values);
    setRegistration(true);
  };

  const handleClearState = () => {
    setRegistration(false);
    removeRegisteredUser();
    reset();
  };

  const password = watch("password", "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="register-container">
      <div className="register">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {registration ? (
            <div className="registered">
              <div className="success">
                <p>Registration Successful</p>
              </div>
              <button className="clear-state" onClick={handleClearState}>
                Clear user state
              </button>
            </div>
          ) : (
            <>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required!",
                  minLength: {
                    value: 3,
                    message: "Name should be at least 3 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Name cannot be more than 30 characters",
                  },
                })}
              />
              {errors.name && <p className="err">{errors.name.message}</p>}

              

              <label>Email:</label>
              <input
                type="text"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                
              />

              
              {errors.email && <p className="err">{errors.email.message}</p>}

              <label>Password:</label>
              <input
                type="password"
                className="password"
                autoComplete="new-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 10,
                    message: "Password must be at least 10 characters",
                  },
                  pattern: {
                    value: /[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]/,
                    message:
                      "Password must contain at least one special character",
                  },
                })}
              />
              {errors.password && (
                <p className="err">{errors.password.message}</p>
              )}

              <label>Confirm Password:</label>
              <input
                type="password"
                className="password"
                autoComplete="new-password"
                {...register("repeatPassword", {
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.repeatPassword && (
                <p className="err">{errors.repeatPassword.message}</p>
              )}

              <input type="submit" value="Sign up" />
            </>
          )}
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (details) => dispatch(registerUser(details)),
    removeRegisteredUser: () => dispatch(removeRegisteredUser()),
  };
};

export default connect(null, mapDispatchToProps)(Register);
