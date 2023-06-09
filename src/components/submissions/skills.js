import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Skills extends Component {
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

        if (!fieldList["techinical"] || fieldList["techinical"] == "") {
            formStatus = false;
            errorList["markshError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }


        if (!fieldList["art"] || fieldList["art"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["communication"] || fieldList["communication"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["sports"] || fieldList["sports"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["dance"] || fieldList["dance"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["music"] || fieldList["music"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["karate"] || fieldList["karate"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["others1"] || fieldList["others1"] == "") {
            formStatus = false;
            errorList["marksError"] = "Please Enter Your marks !";
        } else {
            errorList["marksError"] = "";
        }

        if (!fieldList["others2"] || fieldList["others2"] == "") {
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
            var url = "https://mti-school-data.onrender.com/skills";
            axios.post(url, jsonData).then(response => {
                this.setState({ message: "Register Success !" })
            })
        }

    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="text-primary text-center">

                            <h2> <i className="fa fa-handshake-o"></i> You are Welcome </h2>
                        </div>
                        <p className="text-center ">{this.state.message}</p>
                        <form onSubmit={this.register}>
                            <div className="card">
                                <div className="card-header bg-light text-danger">
                                    <i className="fa fa-user-plus fa-lg"></i> Register
                                    <label className="fa-pull-right">
                                        <Link to="/" className="text-warning">
                                            <i className="fa fa-lock"></i> Already Register ?
                                        </Link>
                                    </label>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
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
                                                    <label>Techinical</label>
                                                    <input type="text" className="form-control"
                                                        name="techinical" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                             <div className="mb-3">
                                                    <label>Art</label>
                                                    <input type="text" className="form-control"
                                                        name="art" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>
                                                 <div className="mb-3">
                                                    <label>Communication</label>
                                                    <input type="text" className="form-control"
                                                        name="communication" onChange={this.processInput} />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Sports</label>
                                                    <input type="text" className="form-control"
                                                        name="sports" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                               <div className="mb-3">
                                                    <label>Dance</label>
                                                    <input type="text" className="form-control"
                                                        name="dance" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                               <div className="mb-3">
                                                    <label>Music</label>
                                                    <input type="text" className="form-control"
                                                        name="music" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Karate</label>
                                                    <input type="text" className="form-control"
                                                        name="karate" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div> 

                                                <div className="mb-3">
                                                    <label>Others-I</label>
                                                    <input type="text" className="form-control"
                                                        name="others1" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div> 

                                                <div className="mb-3">
                                                    <label>Oters-II</label>
                                                    <input type="text" className="form-control"
                                                        name="others2" onChange={this.processInput}   />
                                                    <small className="text-danger">{this.state.errorList.marksError}</small>
                                                </div> 

                                               

                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-danger"> <i className="fa fa-user-plus"></i> Register </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-1"></div>
                </div>
            </div>
        )
    }
}

export default Skills;