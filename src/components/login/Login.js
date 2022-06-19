import "./login.css";
import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Login() {
  const handelLogIn = (e) => {
    e.preventDefault();
    var x = document.getElementById("myInput").value;
    var y = document.getElementById("email").value;
    if (x === "" || x === null || y === "" || y === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please check on the Email or password!!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return false;
    }
  };

  const showPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "email";
    } else {
      x.type = "password";
    }
  };

  return (
    <div>
      <div class="bg-image"></div>

      <div class="image"></div>

      <div class="container">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
            fontSize:"35px",
            color: "white"
          }}
        >
          Sign In
        </span>
        <hr  style={{ color: "white" , marginBottom:"15px"}}/>
        <form>
          <div class="row">
            <div>
              <label for="email">User Name</label>
            </div>
            {/* <div class="col-12" style={{display:"flex", alignItems:"center"}}> */}
            <div class="input-container">
              <i class="fa fa-envelope icon"></i>
              <input
                class="input-field"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email...."
                //   onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div>
              <label for="password">Password</label>
            </div>
            <div class="input-container">
              <i class="fa fa-key icon"></i>
              <input
                class="input-field"
                type="password"
                name="password"
                id="myInput"
                placeholder="Enter password...."
                //   onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <input
                style={{
                  marginTop: "6px",
                  width: "25px",
                  height: "20px",
                  marginRight: "5px",
                }}
                type="checkbox"
                onClick={showPassword}
              />
            </span>
            <span>
              <label style={{ fontWeight: "lighter" }}>Show Password</label>
            </span>
          </div>
          <hr  style={{ color: "white" , marginBottom:"10px"}}/>
          <a
            href="/#"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            //   color: "white"
            }}
          >
            Forgot your password?
          </a>
          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              ariant="outline-primary"
              type="submit"
              class="btn btn-primary"
              onClick={handelLogIn}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
