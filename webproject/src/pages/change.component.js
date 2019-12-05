import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Change extends Component{
    constructor(props){
        super(props);
        this.onChangePasswordn = this.onChangePasswordn.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordc = this.onChangePasswordc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            password: '',
            passwordn: '',
            passwordc: '',
            redirect: ''
        }
    }
    
    onChangePassword(e){
        this.setState({password: e.target.value});
    }

    onChangePasswordn(e){
        this.setState({passwordn: e.target.value});
    }

    onChangePasswordc(e){
        this.setState({passwordc: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.passwordn!=this.state.passwordc){
            alert('passwords must match');
        }
        else if(this.state.passwordn=='' || this.state.password=='' || this.state.passwordc==''){
            alert('fields cannot be empty');
        }
        else{
            const obj = {
                password: this.state.password,
                passwordn: this.state.passwordn
            };
            axios.post('http://localhost:4000/user/change/'+sessionStorage.getItem('user'), obj)
                .then(res => {alert('Update successful');this.setState({redirect: true});})
                .catch(res => alert('password incorrect'));
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
            <h1 align="center">Password Change</h1>
            <form className="hoc-clear" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label align="center">Old Password</label>
                    <input type="password" className="form-control" style={{textAlign:"center"}}
                    value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <div className="form-group">
                    <label align="center">New Password</label>
                    <input type="password" className="form-control" style={{textAlign:"center"}}
                    value={this.state.passwordn} onChange={this.onChangePasswordn}/>
                </div>
                <div className="form-group">
                    <label align="center">Confirm Password</label>
                    <input type="password" className="form-control" style={{textAlign:"center"}}
                    value={this.state.passwordc} onChange={this.onChangePasswordc}/>
                </div>
                <div className="form-group" align="center">
                    <input type="submit" value="Update" className="btn btn-primary" style={{margin:"10px"}}/>
                    <Link to={"/"} className="btn btn-primary" style={{margin:"10px"}}>Back</Link>
                </div>
            </form>
        </div>
        </div>
        );
    }
};