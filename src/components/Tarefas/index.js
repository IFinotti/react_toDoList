import React from 'react';
// import Form from '../Form';
import PropTypes from 'prop-types';

import './tarefas.css';
//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <button>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                className="delete"
              />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
