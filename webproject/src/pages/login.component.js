import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LoginService from '../services/loginservice';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          username: '', 
          password: '',
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
      
      onSubmit = async e => {
        e.preventDefault();
        if(this.state.username=='' || this.state.password==''){
            alert("Fields cannot be empty");
            return;
        }
        else{
            const obj = {
                username: this.state.username,
                password: this.state.password
              };
              const code = await LoginService(obj);
              if(code == 200){
                  sessionStorage.setItem('user', this.state.username);
                this.setState({redirect: true});
                  window.location.reload();
              }
              else{
                  alert('username or password invalid');
              }
        }
      }
    
    render(){
        const {redirect} = this.state;
        if (redirect) {
            return (
            <div>
            <Redirect to={'/'}/>
            </div>);
        }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
            <h1 align="center">Login</h1>
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
                <div className="form-group" align="center">
                    <input type="submit" value="Login" className="btn btn-primary" style={{margin:"10px"}}/>
                    <Link to={"/"} className="btn btn-primary" style={{margin:"10px"}}>Back</Link>
                </div>
            </form>
        </div>
        </div>
    );
    }
};