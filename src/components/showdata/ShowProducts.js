import React, {Component} from 'react';
import db from '../firebase/firebase';
import Showresult from './Showresult';
import toastr from 'toastr';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

export default class ShowProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indicator: false,
            data: {},
            open: false,
            products: []
        };

        this.handleClose = this
            .handleClose
            .bind(this);
        this.cancelhandleClose = this
            .cancelhandleClose
            .bind(this);

    }

    componentDidMount() {

        db
            .collection("todos")
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach((doc) => {

                    let obj = {
                        id: doc.id,
                        ...doc.data()
                    }
                    arr.push(obj)
                });
                console.log(arr);
                this.setState({products: arr})
                //delete
                console.log('=================brd===================');
                console.log(arr);
                console.log('====================================');
                
                db.collection("todos").doc(`${arr[0].id}`).delete().then(()=>{
                    console.log('=================snapshot===================');
                 
                    console.log('====================================');
                })
            });

    }

    removeall(event) {
        if (window.confirm("Are you really want to remove all products")) {}
    }

    deleteHandler(id) {
        if (window.confirm("Are you sure to delete item?")) {}

    }

    editHandler(data) {
        this.setState({data, open: true})

    }

    handleClose()
    {}

    cancelhandleClose() {
        this.setState({open: false});
    }

    render() {
 

        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onClick = {
                this.cancelhandleClose
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onClick = {
                this.handleClose
            } />
        ];
        return (
            <div>

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>

                    <div className="row">

                        <div className="input-field col s12">

                            <input
                                id="email"
                                value={this.state.data.p_id}
                                type="text"
                                className="validate"
                                ref="p_id"
                                required/>

                            <span className="helper-text" data-error="wrong" data-success="right">e.g 14ghd</span>
                        </div>
                        <div className="input-field col s12">

                            <input
                                defaultValue={this.state.data.name}
                                id="email"
                                type="text"
                                className="validate"
                                ref="p_name"
                                required/>

                            <span className="helper-text" data-error="wrong" data-success="right">e.g mobile phone</span>
                        </div>

                        <div className="input-field col s12">

                            <input
                                defaultValue={this.state.data.price}
                                id="email"
                                type="number"
                                className="validate"
                                ref="p_price"
                                required/>

                            <span className="helper-text" data-error="wrong" data-success="right">e.g 15000 Rs</span>
                        </div>

                    </div>

                </Dialog>

                <h1>Products:</h1>
                {this.state.products.length <= 0
                    ? <div className=".center-align">
                            <CircularProgress size={160} thickness={10}/></div>
                    : <div>
                        <table className="responsive-table highlight">
                            <tbody>
                                <tr>
                                    <th>Product ID:</th>
                                    <th>Product Name:</th>
                                    <th>Product Price:</th>
                                    <th>
                                        <button className="btn btn-danger" onClick={this.removeall}>RemoveAll:</button>
                                    </th>
                                </tr>

                                {/*
                        {this
                            .state
                            .products
                            .map((products, i) => <Showresult key={i}  data={products}/>)} */}

                            </tbody>
                        </table>
                    </div>}
            </div>
        )
    }
}
