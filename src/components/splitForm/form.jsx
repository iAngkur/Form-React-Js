import React, {Component} from 'react';
import propTypes from 'prop-types'; // from managing props
import InputText from './input-text'

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <InputText
            type='text'
            name='name'
            label='Enter Name'
            placeholder='Angkur Mondal'
            value={props.values.name}
            onChange={props.hanldeChange}
        />
        <InputText
            type='email'
            name='email'
            label='Enter Email'
            placeholder='angkur@mondal.com'
            value={props.values.email}
            onChange={props.hanldeChange}
        />
        <InputText
            type='password'
            name='password'
            label='Enter Password'
            placeholder='******'
            value={props.values.password}
            onChange={props.hanldeChange}
        />
        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
);

InputText.propTypes = {
    values: PropTypes.object.isRequired,
    hanldeChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;