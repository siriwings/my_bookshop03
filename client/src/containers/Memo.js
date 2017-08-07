/**
 * Created by siri on 2017-07-03.
 */
import React from 'react';
import { connect } from 'react-redux';
import { MemoForm } from '../components';

class Memo extends React.Component {

    render() {
        const write = ( <MemoForm/> );
        return (
            <div>
                { this.props.authenticated ? write : undefined }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    };
};

export default connect(mapStateToProps)(Memo);