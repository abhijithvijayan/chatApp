import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';

class MessageSendForm extends Component {
    renderError = meta => {
        if (meta.touched && meta.error) {
            return <Message error header={meta.error} />;
        }
    };

    onSubmit = formValues => {
        console.log(formValues);
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
        return (
            <React.Fragment>
                <Field name="message" component={this.renderInput} />
                <Button content="Send" labelPosition="left" icon="edit" primary />
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <Form reply onSubmit={this.props.handleSubmit(this.onSubmit)} error>
                    {this.renderForm()}
                </Form>
            </div>
        );
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

export default reduxForm({
    form: 'messageSendForm',
    validate,
})(MessageSendForm);
