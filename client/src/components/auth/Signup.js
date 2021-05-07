import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    onSubmit = formProps => {
        console.log('formProps: ', formProps);
        this.props.signup(formProps, () => {
            this.props.push('/feture');
        });
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field component="input" name="email" type="text" autoComplete="none" />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field component="input" name="password" type="password" autoComplete="none" />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign up!</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signup' }))(Signup);