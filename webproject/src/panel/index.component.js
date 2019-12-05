import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './row';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {venue: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/panel')
        .then(response => {
          this.setState({ venue: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.venue.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Venue List</h3>
          <table className="table" style={{ marginTop: 20 }}>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }