import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
class Login extends Component {

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
    login = (obj) => {
        obj.preventDefault();
        let fieldList = this.state.fieldList;
        let errorList = this.state.errorList;
        let formStatus = true;



        // email vaidation
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!epattern.test(fieldList["myemail"])) {
            formStatus = false;
            errorList["emailError"] = "please enter Your mail!";
        } else {
            errorList["emailError"] = ""
        }


        //passward validation
        if (!fieldList["mypassword"] || fieldList["mypassword"].length < 6) {
            formStatus = false;
            errorList["passwordError"] = "please enter Your passward";
        } else {
            errorList["passwordError"] = ""
        }


        //message printing part
        let mymessage = "";
        if (formStatus == false) {
            mymessage = "The red color Marked field are invalid ! ";
        } else {
            mymessage = "validation sucess, please wait submitting....";
        }
        this.setState({
            errorList,
            message: mymessage
        })

        let loginStatus = false;
        let email = this.state.fieldList.myemail;
        let pass = this.state.fieldList.mypassword;


        if (formStatus == true) {

            if (email == "user@gmail.com" && pass == "12345678") {
                loginStatus = true;
            }// if end
            if (loginStatus == true) {
                this.setState({ message: "Login Sucess ! please wait redirecting..." });
                window.location.href = "http://localhost:3000/#/";
                window.location.reload();
            } else {
                this.setState({ message: "Login Failed Password Incotrect " });
            }

        }

    }






    render() {
        return (
            <>
                <div>
                    <img src="loginimage.png" alt="" height="650px" width="100%" />

                </div>
                <div className="container  logindiv mt-5">            <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <p className="text-center ">{this.state.message}</p>
                        <form onSubmit={this.login}>
                            <div className="card">
                                <div className="card-header bg-light text-danger">
                                    <i className="fa fa-lock fa-lg"></i>Login
                                    <label className=" fa fa-pull-right text-warning">
                                        <Link to="/register" className="text-warning">
                                            <i className="fa fa-user-plus"></i>  New ? Register/signup ?
                                        </Link>
                                    </label>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label>E-mail Id</label>
                                        <input type="text" className="form-control"
                                            name="myemail" onChange={this.processInput} />
                                        <small className="text-danger">{this.state.errorList.emailError}</small>

                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" maxLength="20" className="form-control"
                                            name="mypassword" onChange={this.processInput} />
                                        <small className="text-danger">{this.state.errorList.passwordError}</small>

                                    </div>

                                </div>

                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-danger">Login<i className="fa fa-arrow-right"></i></button>


                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>

                </div>
                </div>
            </>
        )
    }
}
export default Login;
