import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";

const Dashboard = (props) => {
  return (
    <div>
      <div className="container">
        <h1 className="center">To-Do List</h1>
        {props.taskCreator}
      </div>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large teal modal-trigger" href="#modal1">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
