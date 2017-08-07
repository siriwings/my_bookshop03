import React from 'react'
import {
    Well,
    Panel,
    Button,
    Grid
} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form'
import {MemoHelper} from '.'
import PropTypes from 'prop-types';

const MemoForm = props=> {

    const {handleSubmit} = props;

    return (
        <Grid>
            <Well>
                <Panel>
                    <form onSubmit={handleSubmit}>
                        <Field
                            label="Memo"
                            name="memo"
                            component={MemoHelper}
                            type="text"/>
                        <Button bsSize="small" type="submit" bsStyle="primary">POST</Button>
                    </form>
                </Panel>
            </Well>
        </Grid>
    )

}
MemoForm.propTypes = {
    handleSubmit: PropTypes.func
};

MemoForm.defaultProps = {
    handleSubmit:()=>console.log("hello")
};
export default reduxForm({
    form: 'memo'
})(MemoForm)