import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeRate = this.onChangeRate.bind(this);
    this.onChangeCapacity = this.onChangeCapacity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      location: '',
      rate: '',
      capacity: '',
      redirect: false
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/panel/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                location: response.data.location,
                rate: response.data.rate,
                capacity: response.data.capacity });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })  
  }
  onChangeRate(e) {
    this.setState({
      rate: e.target.value
    })
  }

  onChangeCapacity(e){
      this.setState({
        capacity: e.target.value
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      location: this.state.location,
      rate: this.state.rate,
      capacity: this.state.capacity
    };
    axios.post('http://localhost:4000/panel/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.setState({redirect: true});
  }
 
  render() {
      if(this.state.redirect){
          return <Redirect to={'/'} />;
      }
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Venue</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Location: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.location}
                      onChange={this.onChangeLocation}
                      />
                </div>
                <div className="form-group">
                    <label>Rate: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.rate}
                      onChange={this.onChangeRate}
                      />
                </div>
                <div className="form-group">
                    <label>Capacity: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.capacity}
                      onChange={this.onChangeCapacity}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}