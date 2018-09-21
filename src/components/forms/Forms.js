import React, {Component} from 'react';
import db from '../firebase/firebase';
import toastr from 'toastr';
export default class Forms extends Component {
      
    onSubmitHandler(e){
              
        
                e.preventDefault();
                console.log(db);

        
                  db.collection("todos").add({
                    discriptions: this.refs.p_name.value,
                    title: this.refs.p_price.value,
                    timestamp:new Date()
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    toastr.success('Your req has been submitted ... we contact you later , Thankyou!')
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                    toastr.error('Error has been occur! try again later .', 'Inconceivable!')
                });

                
    }
    render() {
       
        return (
            <div>
                <div>
                <h1>Enter products Information:</h1>
                    <div className="row">
                        <form onSubmit={(e) => this.onSubmitHandler(e)} className="col s12">
                            <div className="row">

                                <div className="input-field col s12">

                                    <input id="email" type="text" className="validate" ref="p_id" required/>

                                    <label htmlFor="email">Product Id</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">e.g 14ghd</span>
                                </div>
                                <div className="input-field col s12">

                                    <input id="email" type="text" className="validate" ref="p_name" required/>

                                    <label htmlFor="email">Product Name</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">e.g mobile phone</span>
                                </div>

                                <div className="input-field col s12">

                                    <input id="email" type="number" className="validate" ref="p_price" required/>

                                    <label htmlFor="email">Product Price</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">e.g 15000 Rs</span>
                                </div>

                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
