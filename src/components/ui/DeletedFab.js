
import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/events';
import '../../styles.css';

export const DeletedFab = () => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch( eventDeleted() );
  };

  return (
    <div>
    <button 
        className="btn btn-danger fab-danger ml-2"
        onClick={handleDelete}
    >
        <i className="fas fa-trash" ></i>
        <span> Delete</span>
    </button>
</div>
  )
}
