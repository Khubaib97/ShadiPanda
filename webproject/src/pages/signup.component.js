import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordc = this.onChangePasswordc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '', 
          password: '',
          passwordc:'',
          redirect: false
        };
      }
      onChangeUserName(e) {
        this.setState({
          username: e.target.value
        });
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        }); 
      }
      onChangePasswordc(e) {
        this.setState({
          passwordc: e.target.value
        });
      }
    
      onSubmit(e) {
        e.preventDefault();
        if(this.state.password !== this.state.passwordc){
            alert("Passwords must match");
            return;
        }
        else if(this.state.username=='' || this.state.password=='' || this.state.passwordc==''){
            alert("Fields cannot be empty");
            return;
        }
        else{
          const obj = {
          username: this.state.username,
          password: this.state.password
        };
        axios.post('http://localhost:4000/user/add', obj)
            .then(res => {alert('Account created successfully');this.setState({redirect: true});window.location.reload();})
            .catch(res => alert('Username not available'));
      }
      }
    
    render(){
      const {redirect} = this.state;
        if (redirect) {
            return <Redirect to={'/'}/>;
        }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
            <h1 align="center">Sign-Up</h1>
            <form className="hoc-clear" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label align="center">Username</label>
                    <input type="text" className="form-control" style={{textAlign:"center"}}
                    value={this.state.username} onChange={this.onChangeUserName}/>
                </div>
                <div className="form-group">
                    <label align="center">Password</label>
                    <input type="password" className="form-control" style={{textAlign:"center"}}
                    value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <div className="form-group">
                    <label align="center">Confirm Password</label>
                    <input type="password" className="form-control" style={{textAlign:"center"}}
                    value={this.state.passwordc} onChange={this.onChangePasswordc}/>
                </div>
                <div className="form-group" align="center">
                    <input type="submit" value="SignUp" className="btn btn-primary" style={{margin:"10px"}}/>
                    <Link to={"/"} className="btn btn-primary" style={{margin:"10px"}}>Back</Link>
                </div>
            </form>
        </div>
        </div>
    );
    }
};