import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formdata.email === "" || formdata.email === null) {
      isValid = false;
      validationErrors.email = "Email Required";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formdata.email)
    ) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }

    if (formdata.password === "" || formdata.password === null) {
      isvalid = false;
      validationErrors.password = "Password Required";
    }

    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formdata.email) {
            if (user.password === formdata.password) {
              alert("Login successful");
              navigate("/");
              sessionStorage.setItem("islogedin", "true");
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password;";
              sessionStorage.setItem("islogedin", "false");
            }
          } else if (formdata.email !== "") {
            isvalid = false;
            validationErrors.email = "Wrong Email;";
            sessionStorage.setItem("islogedin", "false");
          }
        });
        setError(validationErrors);
        setValid(isvalid);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 className="mb-5 text-secondary">Login into Your Account</h4>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                  {error.email} {error.password}
                </span>
              )}
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email id"
                    onChange={(event) =>
                      setFormdata({ ...formdata, email: event.target.value })
                    }
                  />
                </div>

                <div className="mb-3 col-md-12">
                  <label>
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setFormdata({ ...formdata, password: event.target.value })
                    }
                  />
                </div>

                <div className="col-md-12">
                  <button className="btn btn-primary float-end">Login</button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you don't have account, Please{" "}
              <Link to="/sign-up">SignUp Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
