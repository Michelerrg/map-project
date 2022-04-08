import React from "react";
import Pin from "../pin/Pin";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            longitude: '',
            latitude: ''
        };

    }

    handleSubmit = e => {
        e.preventDefault();
        const pin = new Pin(this.state);
        console.log(pin);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <form className="register-form" onSubmit={this.handleSubmit}>
                <label>Longitudine:</label>
                <input className="form-control" type="number" name="longitude" value={this.state.longitude} onChange={this.handleChange}/>
                <label>Latitudine:</label>
                <input className="form-control" type="number" name="latitude" value={this.state.latitude} onChange={this.handleChange}/>
                <div className="text-end pt-3">
                    <button className="btn btn-primary">Vai</button>
                </div>
            </form>
        );
    }
}