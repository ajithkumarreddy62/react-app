import React from "react";
import PropTypes from 'prop-types';
import './display.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Radiobtn = ({ value, label, onChange }) => {

    return (
        <div className="radiobtn">
            {label && <h5>{label}</h5>}

            <FormControl component="fieldset">
                <RadioGroup className="btn btn-dark " row aria-label="gender" name="row-radio-buttons-group" value={value} onChange={onChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
        </div>
    )

};

Radiobtn.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

Radiobtn.defaultProps = {
    value: '',
    label: ''
}

export default Radiobtn;