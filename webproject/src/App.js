import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import logo from 'img/asd.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Catalogue from './pages/catalogue.component';
import Home from './pages/home';
import Login from './pages/login.component';
import Signup from './pages/signup.component';
import Change from './pages/change.component';
import Book from './pages/book.component';
import Search from './pages/search.component';
import Index from './panel/index.component';
import Edit from './panel/edit.component';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  Logout(e){
    sessionStorage.removeItem('user');
    window.location.reload();
  }

  render() {
        if(sessionStorage.getItem('user')==='admin'){
          return (
            <Router>
            <div>
              <div className = "wrapper row0">
          <div id="topbar" className="hoc clear"> 
            <ul>
              <li><Link to={'/logout'} onClick={this.Logout}>Logout <i className="fa fa-lg fa-sign-in"></i></Link></li>
              <div>
                <li><p>Welcome, {sessionStorage.getItem('user')}</p></li>
              </div>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path='/edit/:id' component={Edit} />
          <Route path='/' component={Index} />
        </Switch>
            </div>
            </Router>
          );
        }
        if (sessionStorage.getItem('user')!=null) {
            return (
              <Router>
      <div>
        <div className = "wrapper row0">
          <div id="topbar" className="hoc clear"> 
            <ul>
              <li><i className="fa fa-phone"></i> +92 331 2082971</li>
              <li><i className="fa fa-envelope-o"></i> support@shadipanda.com</li>
              <li><Link to={'/'}>Home <i className="fa fa-lg fa-home"></i></Link></li>
              <li><Link to={'/logout'} onClick={this.Logout}>Logout <i className="fa fa-lg fa-sign-in"></i></Link></li>
              <div>
                <li><p>Welcome, {sessionStorage.getItem('user')}</p></li>
                <li><Link to={'/book'}>My Bookings</Link></li>
                <li><Link to={'/change'}>Change Password</Link></li>
              </div>
            </ul>
          </div>
        </div>
        <div className = "wrapper row1">
          <div>
            <header id="header" className="hoc clear"> 
              <div id="logo" className="fl_left">
                <h1><Link to={'/'}>ShadiPanda</Link></h1>
              </div>
            <div className="fl_right"><img src={logo} style={{width:'100px'},{height:'100px'}}/></div>
            </header>
          </div>
        </div>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/catalogue' component={Catalogue} />
          <Route exact path='/change' component={Change} />
          <Route exact path='/book' component={Book} />
          <Route exact path='/search' component={Search} />
          <Route path='/' component={Home} />
        </Switch>
        <div className="wrapper row4">
        <footer id="footer" className="hoc clear"> 
          <div className="one_third first">
            <h6 className="heading">Contact us</h6>
            <ul className="nospace btmspace-30 linklist contact">
              <li><i className="fa fa-map-marker"></i>
                <address>
                MCC-12 Institute of Business Administration Karachi
                </address>
              </li>
              <li><i className="fa fa-phone"></i> +92 21 34811227</li>
              <li><i className="fa fa-envelope-o"></i> helpme@pls.com</li>
            </ul>
            <ul className="faico clear">
              <li><a className="faicon-facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a className="faicon-twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a className="faicon-linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="one_third">
            <p> </p>
          </div>
          <div className="one_third">
            <h6 className="heading">News Updates</h6>
            <ul className="nospace linklist">
              <li>
                <article>
                  <h2 className="nospace font-x1"><a>Fixed abc bug</a></h2>
                  <time className="font-xs block btmspace-10" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 3019</time>
                  <p className="nospace">Sorry we dont pay our devs enough </p>
                </article>
              </li>
              <li>
                <article>
                  <h2 className="nospace font-x1"><a>Added lots of venues from johar</a></h2>
                  <time className="font-xs block btmspace-10" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 3019</time>
                  <p className="nospace">Now you johar bois can get nikkahfied </p>
                </article>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      </div>
      </Router>
            );
        }
    else{
    return (
      <Router>
      <div>
        <div className = "wrapper row0">
          <div id="topbar" className="hoc clear"> 
            <ul>
              <li><i className="fa fa-phone"></i> +92 331 2082971</li>
              <li><i className="fa fa-envelope-o"></i> support@shadipanda.com</li>
              <li><Link to={'/'}>Home <i className="fa fa-lg fa-home"></i></Link></li>
              <li><Link to={'/login'}>Login <i className="fa fa-lg fa-sign-in"></i></Link></li>
              <li><Link to={'/signup'}>Sign-Up <i className="fa fa-lg fa-edit"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className = "wrapper row1">
          <div>
            <header id="header" className="hoc clear"> 
              <div id="logo" className="fl_left">
                <h1><Link to={'/'}>ShadiPanda</Link></h1>
              </div>
            <div className="fl_right"><img src={logo} style={{width:'100px'},{height:'100px'}}/></div>
            </header>
          </div>
        </div>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/catalogue' component={Catalogue} />
          <Route exact path='/search' component={Search} />
          <Route path='/' component={Home} />
        </Switch>
        <div className="wrapper row4">
        <footer id="footer" className="hoc clear"> 
          <div className="one_third first">
            <h6 className="heading">Contact us</h6>
            <ul className="nospace btmspace-30 linklist contact">
              <li><i className="fa fa-map-marker"></i>
                <address>
                  MCC-12 Institute of Business Administration Karachi
                </address>
              </li>
              <li><i className="fa fa-phone"></i> +92 21 34811227</li>
              <li><i className="fa fa-envelope-o"></i> support@shadipanda.com</li>
            </ul>
            <ul className="faico clear">
              <li><a className="faicon-facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a className="faicon-twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a className="faicon-linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="one_third">
            <p> </p>
          </div>
          <div className="one_third">
            <h6 className="heading">News Updates</h6>
            <ul className="nospace linklist">
              <li>
                <article>
                  <h2 className="nospace font-x1"><a>Fixed abc bug</a></h2>
                  <time className="font-xs block btmspace-10" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 3019</time>
                  <p className="nospace">Sorry we dont pay our devs enough </p>
                </article>
              </li>
              <li>
                <article>
                  <h2 className="nospace font-x1"><a>Added lots of venues from johar</a></h2>
                  <time className="font-xs block btmspace-10" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 3019</time>
                  <p className="nospace">Now you johar bois can get nikkahfied </p>
                </article>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      </div>
      </Router>
    );
    }
  }
}

export default App;
