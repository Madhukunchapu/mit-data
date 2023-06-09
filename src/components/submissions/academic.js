import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Academic extends Component {
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

        if (!fieldList["english"] || fieldList["english"] == "") {
            formStatus = false;
            errorList["markshError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }


        if (!fieldList["hindi"] || fieldList["hindi"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["telugu"] || fieldList["telugu"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["maths"] || fieldList["maths"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["science"] || fieldList["science"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["social"] || fieldList["social"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["environmentalScience"] || fieldList["environmentalScience"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["ict"] || fieldList["ict"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }


        
        if (!fieldList["robotics"] || fieldList["robotics"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["generalScience"] || fieldList["generalScience"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["valueEduacation"] || fieldList["valueEduacation"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["iitMaths"] || fieldList["iitMaths"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["iitPhysics"] || fieldList["iitPhysics"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["iitChemistry"] || fieldList[""] == "iitChemistry") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["iitReasoning"] || fieldList["iitReasoning"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["neetBiology"] || fieldList["neetBiology"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["neetZoology"] || fieldList["neetZoology"] == "") {
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
            var url = "https://mti-school-data.onrender.com/academic";
            axios.post(url, jsonData).then(response => {
                this.setState({ message: "Register Success !" })
            })
        }

    }

    render() {
        return (
            <>
             <div>
                <img src="home1.jpg" alt="" height="800px" width="100%" />

            </div>
            <div className="container list2 mt-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        
                        <p className="text-center ">{this.state.message}</p>
                        <form onSubmit={this.register}>
                            <div className="card">
                                <div className="card-header bg-light text-danger">
                                    <h2>Accademic Development</h2>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label>Student Name</label>
                                                   <input type="text" className="form-control"
                                                        name="studentName" onChange={this.processInput}  />
                                                    <small className="text-danger">{this.state.errorList.studentNameError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Roll Number</label>
                                                    <input type="text" className="form-control"
                                                        name="rollNumber" onChange={this.processInput} F/>
                                                    <small className="text-danger">{this.state.errorList.numberError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>English</label>
                                                    <input type="text" className="form-control"
                                                        name="english" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Hindi</label>
                                                    <input type="text" className="form-control"
                                                        name="hindi" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Telugu</label>
                                                    <input type="text" className="form-control"
                                                        name="telugu" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Maths</label>
                                                    <input type="text" className="form-control"
                                                        name="maths" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Science</label>
                                                    <input type="text" className="form-control"
                                                        name="science" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                              
                                            </div>
                                            <div className="col-lg-4">
                                            <div className="mb-3">
                                                    <label>Social</label>
                                                    <input type="text" className="form-control"
                                                        name="social" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Envronmental Science</label>
                                                    <input type="text" className="form-control"
                                                        name="environmentalScience" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>ICT</label>
                                                    <input type="text" className="form-control"
                                                        name="ict" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>


                                                <div className="mb-3">
                                                    <label>Robotics</label>
                                                    <input type="text" className="form-control"
                                                        name="robotics" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>General Science</label>
                                                    <input type="text" className="form-control"
                                                        name="generalScience" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>



                                                 <div className="mb-3">
                                                    <label>Value Eduacation</label>
                                                    <input type="text" className="form-control"
                                                        name="valueEduacation" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                 

                                            </div>
                                            <div className="col-lg-4">
                                            <div className="mb-3">
                                                    <label>IIT-Maths</label>
                                                    <input type="text" className="form-control"
                                                        name="iitMaths" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>
                                            <div className="mb-3">
                                                    <label>IIT-Physics</label>
                                                    <input type="text" className="form-control"
                                                        name="iitPhysics" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>IIT-Chemistry</label>
                                                    <input type="text" className="form-control"
                                                        name="iitChemistry" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>iit-Reasoning</label>
                                                    <input type="text" className="form-control"
                                                        name="iitReasoning" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Neet-Biology</label>
                                                    <input type="text" className="form-control"
                                                        name="neetBiology" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Neet-Zoology</label>
                                                    <input type="text" className="form-control"
                                                        name="neetZoology" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-danger"> Submit </button>
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

export default Academic;