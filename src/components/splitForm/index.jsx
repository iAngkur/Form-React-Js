import React, {Component} from 'react';
import Form from './form';

export default class SplitForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    hanldeChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    };

    render() {
        return(
            <div>
                <Form 
                    values={this.state}
                    hanldeChange={this.hanldeChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}