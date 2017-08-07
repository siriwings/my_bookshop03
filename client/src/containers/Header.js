import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {bindActionCreators} from 'redux';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {signoutUser} from '../actions/auth';


class Header extends Component {

    handleLogout() {
        this.props.signoutUser();
    }

    renderLinks() {
        if (this.props.authenticated) {
            //show a link to sign out
            return (
                <NavItem onClick={this.handleLogout.bind(this)} eventKey={6}>Sign Out</NavItem>
            );

        } else {
            //show a link to sign in or sign up
            return (
                <LinkContainer to="/signin">
                    <NavItem eventKey={1}>Sign In/Up</NavItem>
                </LinkContainer>
            );
        }
    }

    render() {
        return (
            <Navbar inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <LinkContainer exact to="/" style={{cursor: 'pointer'}}>
                        <Navbar.Brand>
                            Portfolio
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about" >
                            <NavItem active={true} eventKey={3}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <NavItem active={true} eventKey={4}>Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        {this.renderLinks()}
                        <LinkContainer to="/admin">
                            <NavItem eventKey={5}>Admin</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <NavItem eventKey={9}>
                                Your Cart { (this.props.totalQty > 0) ? (<Badge
                                className="badge">{this.props.totalQty}</Badge>) : ('')}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/memo">
                            <NavItem eventKey={5}>Memo</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


Header.propTypes = {
    signoutUser: PropTypes.func,
    // cartItemsNumber: PropTypes.number,
    authenticated:PropTypes.bool

};

Header.defaultProps = {
    signoutUser: ()=>console.log('this is test'),
    // cartItemsNumber: 1,
    authenticated: false
};
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        totalQty: state.cart.totalQty

    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signoutUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
