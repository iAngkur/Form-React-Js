import React, {Component} from 'react';
import propTypes from 'prop-types'; // from managing props

const InputText = props => (
    <div className="form-group">
        <label htmlFor={props.name}> {props.label} </label>
        <input 
            className="form-control"
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

InputText.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
};

InputText.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
};

export default InputText;