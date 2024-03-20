import React, { useState } from 'react';

export default function TodoItem(props) {
  const { name, id, onDelete } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-light" onClick={handleCheckboxChange}>
            {isChecked ? (
              <i className="bi bi-check-square text-success"></i>
            ) : (
              <i className="bi bi-square"></i>
            )}
          </button>
          {isChecked ? (
              <span className="ms-2" style={{textDecoration:"line-through"}}>{name}</span>
          ) : (
            <span className="ms-2">{name}</span>
          )} 
          
        </div>
        <div>
          <button onClick={() => onDelete(id)} className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}
