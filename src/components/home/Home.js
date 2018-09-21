import React, { Component } from 'react';
import myimg from './doityourself.png';
export default class Home extends Component {
    render() {
        return (
            <div>
                <img className="responsive-img" src={myimg} />
            </div>
        )
    }
}
