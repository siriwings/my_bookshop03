/*
import React, {Component} from 'react'
import {
    Well,
    Panel,
    Button,
    Grid
} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form'
import {FormHelper} from '../../components'

class SignupForm extends Component {

    renderAlert() {
        if (this.props.errorMessage) {
            return <div className="alert alert-danger">
                <strong>Oops: </strong>{this.props.errorMessage}
            </div>
        }
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <Grid>
                <Well>
                    <Panel>
                        <form onSubmit={handleSubmit}>

                            <Field
                                label="Email"
                                name="email"
                                component={FormHelper}
                                type="text"/>

                            <Field
                                label="Password"
                                name="password"
                                component={FormHelper}
                                type="password"/>

                            <Field
                                label="Password Confirmation"
                                name="passwordConfirmation"
                                component={FormHelper}
                                type="password"/>
                            {this.renderAlert()}
                            <Button type="submit" bsStyle="primary">Sign Up</Button>
                        </form>
                    </Panel>
                </Well>
            </Grid>
        )
    }
}

const validate = values => {
    const errors = {}

    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Passwords must match'
    }

    if (!values.email) {
        errors.email = 'Please enter an email'
    }

    if (!values.password) {
        errors.password = 'Please enter a password'
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please confirm your password'
    }

    return errors
}


export default reduxForm({
    form: 'signup',
    validate
})(SignupForm)

*/