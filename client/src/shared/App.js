import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { About, Footer} from '../components';
import {Memo,BookMain, Header, Signin, Signup, Contact, Admin, Cart} from "../containers";
// import RequireAuth from './../containers/auth/Require_auth';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Route exact={true} path="/" component={BookMain}/>
                    <Switch>
                        <Route path="/signin" component={Signin}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/memo" component={Memo}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

