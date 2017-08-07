// import React, {Component} from 'react'
// import {
//     Well,
//     Panel,
//     Button,
//     Grid
// } from 'react-bootstrap';
// import {reduxForm, Field} from 'redux-form'
// import {FormHelper} from '../../components'
// import {Link} from 'react-router-dom';
//
// class SigninForm extends Component {
//
//     renderAlert() {
//         if (this.props.errorMessage) {
//             return <div className="alert alert-danger">
//                 <strong>Oops: </strong>{this.props.errorMessage}
//             </div>
//         }
//     }
//
//     render() {
//         const {handleSubmit} = this.props;
//
//         return (
//             <Grid>
//                 <Well>
//                     <Panel>
//                         <form onSubmit={handleSubmit}>
//                             <Field
//                                 label="Username"
//                                 name="email"
//                                 component={FormHelper}
//                                 type="text"/>
//
//                             <Field
//                                 label="Password"
//                                 name="password"
//                                 component={FormHelper}
//                                 type="password"/>
//                             {/*{this.renderAlert()}*/}
//                             {(this.props.errorMessage && (<div className="alert alert-danger">
//                                 <strong>Oops: </strong>{this.props.errorMessage}
//                             </div>))}
//                             <Button type="submit" bsStyle="primary">Sign In</Button>
//                             <span> New Here? </span><Link to="/signup">Sign Up</Link>
//                         </form>
//                     </Panel>
//                 </Well>
//             </Grid>
//         )
//     }
// }
//
// export default reduxForm({
//     form: 'signin'
// })(SigninForm)
