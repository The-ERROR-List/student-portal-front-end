import React from "react";
import "./admin.css";
import {Alert } from "react-bootstrap";
import { useState } from 'react'
import { useSelector } from 'react-redux';
import ItemDash from './itemDash/itemDash';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Admin() {
  const students = useSelector((state) => state.teacher.infoTeacher);
  console.log(students);
  const [value, onChange] = useState(new Date());
  return (

    <div >
      <div className="admin-teacher">
        <Alert variant="success" style={{
          fontSize: "50px",
          color: "#005240",
          backgroundColor: "#005240",
          borderColor: "#005240",
          // width: "100%",
          height: "100%",
          marginLeft: "-27px",
          marginRight: "0px"
        }} >
          <Alert.Heading style={{

            color: "white",
            fontSize: "35px",

          }}>
            Dashboard


          </Alert.Heading>


        </Alert>

        <div class="container" style={{}}>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="card-box bg-blue">
                <div class="inner">
                  <h3> Teachers </h3>
                  <br />
                  <p> 10 Teachers </p>
                </div>
                <div class="icon">

                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <a href="/admin-teacher" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="card-box bg-green">
                <div class="inner">
                  <h3> Students  </h3>
                  <br />
                  <p> 30 Students</p>
                </div>
                <div class="icon">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <a href="/admin-student" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card-box bg-orange">
                <div class="inner">
                  <h3> Courses</h3>
                  <br />
                  <p>4 courses  </p>
                </div>
                <div class="icon">
                  <i class="fa fa-book" aria-hidden="true"> </i>
                </div>
                <a href="/admin-course" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card-box bg-red">
                <div class="inner">
                  <h3>Classes </h3>
                  <br />
                  <p>5 Classes</p>
                </div>
                <div class="icon">
                  <i class="fa fa-users"></i>
                </div>
                <a href="/admin-class" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "-20px" }}>
          <div>

            <ItemDash />
          </div>
          <div style={{ marginTop: "110px", width: "600px", height: "600px" }}>
            {/* <h1 style={{marginLeft:"30px"}} class="column h6 color_label"> Calender </h1> */}
            <Calendar onChange={onChange} value={value} />

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
