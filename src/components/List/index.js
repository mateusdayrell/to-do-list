import React from "react";
import PropTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './List.css'

export default function List({tasks, handleEdit, handleDelete}) {
    return (
        <ul className="tarefas">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit 
                  className="edit" 
                  onClick={(e) => handleEdit(e, index)}/>
                <FaWindowClose 
                  className="delete" 
                  onClick={(e) => handleDelete(e, index)}/>
              </span>
            </li>
          ))}
        </ul>
    )
}



List.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
}