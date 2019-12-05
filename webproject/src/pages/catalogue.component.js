import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import placeholder from 'img/demo/gallery/01.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CatRow from './catRow';
import axios from 'axios';

export default class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.Sort = this.Sort.bind(this);
    this.state = {venue: []};
  }
  componentDidMount(){
    axios.get('http://localhost:4000/venue')
      .then(response => {
        this.setState({ venue: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  Sort(e){
    axios.get('http://localhost:4000/venue/'+e.target.value)
      .then(response => {
        this.setState({ venue: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  catRow(){
    return this.state.venue.map(function(object, i){
        return <CatRow obj={object} key={i} />;
    });
  }
  
  render(){
    return (
        <div>
            <div className="wrapper row0">
        <nav id="mainav" className="hoc clear"> 
          <ul className="clear">
            <li><Link to={'/'}>Home</Link></li>
            <li className="active"><Link to={'/catalogue'}>Catalogue</Link></li>
            <li><Link to={'/search'}>Search</Link></li>
          </ul>
        </nav>
      </div>
      <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content">
                    <div id="gallery">
                    <figure>
                    <div>
                    <header className="heading" align="center">Venues</header>
                    </div>
                    <div>
                    <select style={{float: 'right'}} onChange={this.Sort}>
                        <option value=''>None</option>
                        <option value="name">Name - Ascending</option>
                        <option value="-name">Name - Descending</option>
                        <option value="rate">Rate - Ascending</option>
                        <option value="-rate">Rate - Descending</option>
                        <option value="capacity">Capacity - Ascending</option>
                        <option value="-capacity">Capacity - Descending</option>
                    </select>
                    <header style={{float: "right"}}>Sort by: </header>
                    </div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                      <tbody>
                        {this.catRow()}
                      </tbody>
                    </table>
                  </figure>
                </div>
            </div>
            </main>
        </div>
        </div>
    );
    }
};