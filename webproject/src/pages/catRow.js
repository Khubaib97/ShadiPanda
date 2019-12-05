import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import axios from 'axios';
import BookService from '../services/bookservice';

class CatRow extends Component {
    constructor(props){
        super(props);
        this.changeDate = this.changeDate.bind(this);
        this.bookVenue = this.bookVenue.bind(this);
        this.state = {
            date: '',
            flag: true
        }
    }

    changeDate(e){
        this.setState({date: e.target.value});
    }

    bookVenue = async e => {
        e.preventDefault();
        if(sessionStorage.getItem('user')==null){
            alert('Please log-in to book');
        }
        else{
                const obj = {
                    name: this.props.obj.name,
                    date: this.state.date
                };
                const code = await BookService(obj);
                if(code==200){
                const data = {
                    name: this.props.obj.name,
                    date: this.state.date,
                    username: sessionStorage.getItem('user')
                }
                axios.post('http://localhost:4000/book/add', data)
                .then(res => {alert('Booking done');})
                .catch(res => alert('Error'));
            }
            else if(code==204){
                alert('Date not available');
            }
            else{
                alert('Error');
            }
        }
    }

    render(){
        const images = [
            { url: this.props.obj.images[0] },
            { url: this.props.obj.images[1] },
            { url: this.props.obj.images[2] },
        ];
        return (
            <tr>
                <td>
                <SimpleImageSlider width={500} height={400} images={images} />
                </td>
                <td>
                    <div><h1><strong>{this.props.obj.name}</strong></h1></div>
                    <div>{this.props.obj.location}</div>
                    <div><strong>Rate: </strong>{this.props.obj.rate} PKR</div>
                    <div><strong>Capacity: </strong>{this.props.obj.capacity}</div>
                    <br />
                    <p><strong>Select date:</strong></p>
                    <input type='date' value={this.state.date} onChange={this.changeDate} />
                    <br />
                    <input type='submit' value='Book Now' onClick={this.bookVenue} className={'btn btn-primary'} />
                </td>
            </tr>
        );
    }
}

export default CatRow;