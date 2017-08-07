import React from 'react'
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const MemoHelper = ({input, type, label, meta: {touched, error}, ...custom}) => (  // Define stateless component to render input and errors



<FormGroup controlId="formControlsTextarea">
    <ControlLabel>{label}</ControlLabel>
    <FormControl style={{height: '100px'}}componentClass="textarea" placeholder="Write down your memo" type={type} {...input} {...custom} />
    </FormGroup>

)

export default MemoHelper;
