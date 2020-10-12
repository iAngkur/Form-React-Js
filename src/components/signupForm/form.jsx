import React from 'react';
import PropTypes from 'prop-types'; // from managing props
import InputText from './input-text'

const Form = (props) => { // destructuring kore nilam ekbare. props likhleo hoito
    return (
        <form onSubmit={props.handleSubmit}>
            <InputText
                type='text'
                name='name'
                label='Enter Name'
                placeholder='Angkur Mondal'
                value={props.values.name}
                error={props.errors.name}
                onChange={props.handleChange}
            />
            <InputText
                type='email'
                name='email'
                label='Enter Email'
                placeholder='email@test.com'
                value={props.values.email}
                error={props.errors.email}
                onChange={props.handleChange}
            />
            <InputText
                type='password'
                name='password'
                label='Enter Password'
                placeholder='******'
                value={props.values.password}
                error={props.errors.password}
                onChange={props.handleChange}
            />
            <InputText
                type='date'
                name='birthDate'
                label='Enter birthDate'
                value={props.values.birthDate}
                error={props.errors.birthDate}
                onChange={props.handleChange}
            />

            <div className="form-group">
                <label>Select Gender</label>
                <br/>
                <label className="mr-3">
                    <input 
                        className="form-group mr-1"
                        type="radio" 
                        name='gender' 
                        value='male'
                        onChange={props.handleChange}
                    />
                    Male
                </label>
                <label className="mr-3">
                    <input
                        className="form-group mr-1"
                        type="radio" 
                        name='gender' 
                        value='female' 
                        onChange={props.handleChange}
                    />
                    Female
                </label>
                <label className="mr-3">
                    <input 
                        className="form-group mr-1"
                        type="radio" 
                        name='gender' 
                        value='other' 
                        onChange={props.handleChange}
                    />
                    Other
                </label>
                {props.errors.gender && (<div className="invalid-feedback">{props.errors.gender}</div>)}
            </div>
            
            <div className="form-group">
                <label>
                    <input 
                        className="form-group mr-1"
                        type="checkbox"
                        name="agreement"
                        checked={props.agreement}
                        onChange={props.handleAgreement}
                    />
                    I agree with all the terms & condtions
                </label>
            </div>
            <button 
                className='btn btn-primary' 
                type='submit' 
                disabled={!props.agreement}>
                Create User
            </button>
        </form>
    );
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors:PropTypes.object.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;