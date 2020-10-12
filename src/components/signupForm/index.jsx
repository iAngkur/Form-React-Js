import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './form';

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};

export default class SignupForm extends Component {
    state = {
        values: initValues,
        agreement: false,
        errors: {}
    };

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        });
    };

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state.values);
        // event.target.reset();
        // this.setState({ values: initValues, agreement: false })

        const { errors, isValid } = this.validate();

        if (isValid) {
            // console.log(this.state.values);
            this.props.createUser(this.state.values);
            event.target.reset();
            this.setState({ values: initValues, agreement: false, errors: {} })
        } else{
            // console.log(errors);
            this.setState({errors});
        }
    };

    validate = () => {
        const errors = {};
        const {values: {name, email, password, gender, birthDate} } = this.state;
        
        if (!name) {
            errors.name = "Please provide your name"
        }
        if (!email) {
            errors.email = "Please provide your email"
        }
        if (!password) {
            errors.password = "Please provide your password"
        }
        if (!birthDate) {
            errors.birthDate = "Please provide your birthDate"
        }
        if (!gender) {
            errors.gender = "Please select your gender"
        }

        return{
            errors,
            isValid: Object.keys(errors).length === 0
        }
    };

    render() {
        return(
            <div>    
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement} 
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAgreement={this.handleAgreement}
                />
            </div>
        );
    };
}

SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}