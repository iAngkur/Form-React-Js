import React from 'react';
import PropTypes from 'prop-types'; // from managing props

const InputText = props => (
    <div className="form-group">
        <label htmlFor={props.name}> {props.label} </label>
        <input 
            className={props.error ? 'form-control is-invalid' : 'form-control'}
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
);

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errors: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputText.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
};

export default InputText;