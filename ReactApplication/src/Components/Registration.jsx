import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Registration() {
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let valiidationErrors = {};

    if (formdata.fname === "" || formdata.fname === null) {
      isValid = false;
      valiidationErrors.fname = "First Name Required";
    }

    if (formdata.lname === "" || formdata.lname === null) {
      isValid = false;
      valiidationErrors.lname = "Last Name Required";
    }

    if (formdata.email === "" || formdata.email === null) {
      isValid = false;
      valiidationErrors.email = "Email Required";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formdata.email)
    ) {
      isValid = false;
      valiidationErrors.email = "Email is not valid";
    }

    if (formdata.password === "" || formdata.password === null) {
      isValid = false;
      valiidationErrors.password = "Password Required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formdata.password
      )
    ) {
      isValid = false;
      validationErrors.password =
        "Password must be at least 8 characters long, include at least one letter, one number, and one special character.";
    }

    if (formdata.confirmpassword !== formdata.password) {
      isValid = false;
      valiidationErrors.confirmpassword = "Passsword doesn't match";
    }

    setError(valiidationErrors);
    setValid(isValid);

    if (Object.keys(valiidationErrors).length === 0) {
      axios
        .post("http://localhost:3000/users", formdata)
        .then(alert("Registration Successful"), navigate("/login"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 className="mb-5 text-secondary">Create Your Account</h4>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                  {error.fname}; {error.lname}; {error.email}; {error.password};{" "}
                  {error.confirmpassword};
                </span>
              )}
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label>
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    placeholder="Enter First Name"
                    onChange={(event) =>
                      setFormdata({ ...formdata, fname: event.target.value })
                    }
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label>
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    placeholder="Enter Last Name"
                    onChange={(event) =>
                      setFormdata({ ...formdata, lname: event.target.value })
                    }
                  />
                </div>

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
                <div className="mb-3 col-md-12">
                  <label>
                    Confirm Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(event) =>
                      setFormdata({
                        ...formdata,
                        confirmpassword: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary float-end">
                    Signup Now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
