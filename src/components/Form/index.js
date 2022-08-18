import React from "react";
import PropTypes from 'prop-types'
import { FaPlus, FaSave } from 'react-icons/fa'

import './Form.css'

export default function Form({handleSubmit, handleChange, newTask, index}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
          <input 
            type="text" 
            className="input" 
            value={newTask}
            onChange={handleChange}
          />
          <button type="submit">
            {index === -1 ? <FaPlus/> : <FaSave/>}
          </button>
        </form>
    )
}



Form.propTypes = {
    handlesubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}