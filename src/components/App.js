import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'toastr/build/toastr.min.css';
import 'toastr/build/toastr.min.js';
import Forms from './forms/Forms';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './home/Home';
import ShowProducts from './showdata/ShowProducts';
import Links from  './Links';

export default class App extends Component {
  onClickHandler=()=>{
    console.log("done");
    
    fetch('/users')
    .then(function(response) {
        console.log(response);
        
    }).catch((err)=>{
          console.log(err);
          
    })
  }
  render() {
    return (
      <div>

        <Router>
          <div>
            <Links/>
            <div className="container">
               
               <button type="button" class="btn btn-large btn-block btn-default" onClick={this.onClickHandler}>button</button>
               
              <Route exact path='/' component={Home}/>
              <Route path='/add_products' component={Forms}/>
              <Route path='/show_products' component={ShowProducts}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
