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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
};

export default InputText;