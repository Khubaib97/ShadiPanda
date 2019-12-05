import React, { Component } from 'react';
import axios from 'axios';
import BookRow from './BookRow';

export default class Book extends Component {

  constructor(props) {
      super(props);
      this.state = {books: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/book/get/'+sessionStorage.getItem('user'))
        .then(response => {
          this.setState({ books: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.books.map(function(object, i){
          return <BookRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Bookings List</h3>
          <table className="table" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Venue</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }