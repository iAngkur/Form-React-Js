import React from 'react';

export default class ControlledForm extends React.Component {

    // form e jokhon state add korbo tokhon each input er jonno onChange handler
    // must add korte hobe nahole kaj korbe na input field
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault(); // Prevent Default page loading when clicking submit button
        // console.dir(event.target); // we will get all details of the form

        console.log(this.state);

        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }

    render() {
        const {name, email, password} = this.state; // destructure kore nilam state er property gula ekhane same hobe
            /*  Same as:   
                    const name = this.state.name
                    const email = this.state.email
                    const password = this.state.password */
        
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control mt-3" 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Enter your name"
                    />
                    <input 
                        className="form-control mt-3" 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Enter your email"
                    />
                    <input 
                        className="form-control my-3" 
                        type="password" 
                        name="password"
                        value={password} 
                        onChange={this.handleChange}
                        placeholder="Enter your password"
                    />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}