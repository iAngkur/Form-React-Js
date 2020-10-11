import React from 'react';

export default class UncontrolledForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault(); // Prevent Default page loading when clicking submit button
        // console.dir(event.target); // we will get all details of the form
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.pwd.value;
        console.log(data);

        event.target.reset();
    }

    render() {
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control mt-3" type="text" name="name" placeholder="Enter your name"/>
                    <input className="form-control mt-3" type="email" name="email" placeholder="Enter your email"/>
                    <input className="form-control my-3" type="password" name="pwd" placeholder="Enter your password"/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}