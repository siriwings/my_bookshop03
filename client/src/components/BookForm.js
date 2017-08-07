import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form'
import {FormHelper} from '.'

const required = value => (value ? undefined : 'Required')

const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined
const BookForm = props => {

    const {handleSubmit, errorMessage,reset} = props;

    return (

        <form onSubmit={handleSubmit}>

            <Field
                label="Title"
                name="title"
                component={FormHelper}
                validate={required}
                type="text"/>

            <Field
                label="Description"
                name="description"
                component={FormHelper}
                validate={required}
                type="text"/>

            <Field
                label="Price"
                name="price"
                component={FormHelper}
                validate={[number,required]}
                type="text"/>

            {(errorMessage) && (<div className="alert alert-danger">
                <strong>Oops: </strong>{errorMessage}
            </div>)}
            <Button type="submit" bsStyle="primary">Save Book</Button>
        </form>

    )

}


BookForm.propTypes = {
    handleSubmit: PropTypes.func,
    errorMessage: PropTypes.bool

};

BookForm.defaultProps = {
    handleSubmit: () => console.log('this is test'),
    errorMessage: false
};

export default reduxForm({
    form: 'book'
})(BookForm)