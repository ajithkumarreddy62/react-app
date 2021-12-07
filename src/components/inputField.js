import React from "react";
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import './display.css';

const InputField = ({ value, label, type, onChange }) => {

    return (
        <div className="form-group">
            {label && <h5>{label}</h5>}
            <TextField className="inputstyle" label={label} id="outlined-required" type={type} value={value} onChange={onChange} autoComplete="off" />
        </div>
    )

};

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text'
}

export default InputField;