import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CatRow from './catRow';
import axios from 'axios';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            field: '',
            venue: []
        };
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.fetch = this.fetch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeSearch(e){
        this.setState({search: e.target.value});
    }

    onChangeField(e){
        this.setState({field: e.target.value});
    }

    fetch(){
        axios.get('http://localhost:4000/venue/'+this.state.field+'/'+this.state.search)
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

    onSubmit(e){
        e.preventDefault();
        this.fetch();
    }

    render(){
        return (
        <div>
            <div className="wrapper row0">
                <nav id="mainav" className="hoc clear"> 
                    <ul className="clear">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/catalogue'}>Catalogue</Link></li>
                        <li className="active"><Link to={'/search'}>Search</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <header style={{fontSize: 18}}><strong>Search using: </strong></header>
                    <br />
                    <select className='form-control' onChange={this.onChangeField}>
                        <option value=''>-Select attributte-</option>
                        <option value='name'>Name</option>
                        <option value='location'>Location</option>
                        <option value='rate'>Rate</option>
                        <option value='capacity'>Capacity</option>
                    </select>
                    <br /><br />
                    <input type='text' className='form-control' onChange={this.onChangeSearch} />
                    <br />
                    <input type='submit' value='Search' className='btn btn-primary' onClick={this.onSubmit} />
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                      <tbody>
                        {this.catRow()}
                      </tbody>
                    </table>
                </main>
            </div>
        </div>
        );
    }
};