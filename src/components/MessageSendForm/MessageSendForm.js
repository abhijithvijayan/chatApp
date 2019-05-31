import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendMessage } from '../../containers/ChatSection/actions';

class MessageSendForm extends Component {
    renderError = meta => {
        if (meta.touched && meta.error) {
            return <Message error header={meta.error} />;
        }
    };

    onSubmit = formValues => {
        const messageBody = {
            who: this.props.userId,
            what: formValues.message,
            when: new Date().valueOf(),
        };
        this.props.sendMessage(messageBody);
        this.props.reset();
    };

    renderInput = formProps => {
        // console.log(formProps);
        return (
            // semantic ui
            <Form.Field>
                <label>Message</label>
                <Form.TextArea {...formProps.input} type={formProps.type} />
                {/* show the error */}
                {this.renderError(formProps.meta)}
            </Form.Field>
        );
    };

    renderForm() {
        if (this.props.isSignedIn) {
            return (
                <React.Fragment>
                    <Form reply onSubmit={this.props.handleSubmit(this.onSubmit)} error>
                        <Field name="message" component={this.renderInput} />
                        <Button content="Send" labelPosition="left" icon="edit" primary />
                    </Form>
                </React.Fragment>
            );
        }
        return null;
    }

    render() {
        return <div>{this.renderForm()}</div>;
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.message) {
        // if no title
        errors.message = 'You must type in a message';
    }
    return errors;
};

const mapStateToProps = state => {
    return {
        isSignedIn: state.app.isSignedIn,
        userId: state.app.userId,
    };
};

const FormConnector = connect(
    mapStateToProps,
    { sendMessage }
)(MessageSendForm);

export default reduxForm({
    form: 'messageSendForm',
    validate,
})(FormConnector);
