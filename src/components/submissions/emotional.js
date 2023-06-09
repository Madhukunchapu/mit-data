import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Emotional extends Component {
    constructor() {
        super();
        this.state = {
            fieldList: {},
            errorList: {},
            message: ''
        }
    }

    processInput = (obj) => {
        let fieldList = this.state.fieldList;
        fieldList[obj.target.name] = obj.target.value;
        this.setState({
            fieldList
        })
    }

    register = (obj) => {
        obj.preventDefault();
        let fieldList = this.state.fieldList;
        let errorList = this.state.errorList;
        let formStatus = true;

        if (!fieldList["studentName"] || fieldList["studentName"] == "") {
            formStatus = false;
            errorList["studentNameError"] = "Please Enter Student Name !";
        } else {
            errorList["studentNameError"] = "";
        }


        if (!fieldList["rollNumber"] || fieldList["rollNumber"] == "") {
            formStatus = false;
            errorList["numberError"] = "Please Enter Roll Number !";
        } else {
            errorList["numberError"] = "";
        }

        if (!fieldList["angerManagement"] || fieldList["angerManagement"] == "") {
            formStatus = false;
            errorList["markshError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }


        if (!fieldList["happinessIndex"] || fieldList["happinessIndex"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["decissionMaking"] || fieldList["decissionMaking"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["obedience"] || fieldList["obediance"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["understanding"] || fieldList["understanding"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["brave"] || fieldList["brave"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["problemSolving"] || fieldList["problemSolving"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }




        let mymessage = '';
        if (formStatus == false) {
            mymessage = "The red color marked fields are invalid !";
        } else {
            mymessage = "Validation Success , Please wait submitting...";
        }

        this.setState({
            errorList,
            message: mymessage
        })

        if (formStatus == true) {
            var jsonData = this.state.fieldList;
            var url = "https://mti-school-data.onrender.com/emotional";
            axios.post(url, jsonData).then(response => {
                this.setState({ message: "Register Success !" })
            })
        }

    }

    render() {
        return (

             <>
                <div>
                    <img src="home1.jpg" alt="" height="656px" width="100%" />

                </div>
                <div className="container list2 mt-5">             
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">

                        <p className="text-center ">{this.state.message}</p>
                        <form onSubmit={this.register}>
                            <div className="card">
                                <div className="card-header bg-light text-danger">
                                    <h2>Emotional Development</h2>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label>Student Name</label>
                                                    <input type="text" className="form-control"
                                                        name="studentName" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.studentNameError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Roll Number</label>
                                                    <input type="text" className="form-control"
                                                        name="rollNumber" onChange={this.processInput} F />
                                                    <small className="text-danger">{this.state.errorList.numberError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Anger Management</label>
                                                    <input type="text" className="form-control"
                                                        name="angerManagement" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>


                                                <div className="mb-3">
                                                    <label>Brave</label>
                                                    <input type="text" className="form-control"
                                                        name="brave" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Problem Solving</label>
                                                    <input type="text" className="form-control"
                                                        name="problemSolving" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>



                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label>Happiness Index</label>
                                                    <input type="text" className="form-control"
                                                        name="happinessIndex" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Decision Making</label>
                                                    <input type="text" className="form-control"
                                                        name="decissionMaking" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Obedience</label>
                                                    <input type="text" className="form-control"
                                                        name="obedience" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Understanding</label>
                                                    <input type="text" className="form-control"
                                                        name="understanding" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-danger">  Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-1"></div>
                </div>
                </div>
            </>
        )
    }
}

export default Emotional;