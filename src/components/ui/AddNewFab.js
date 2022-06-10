
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const AddNew = () => {

        dispatch( openModal() );

    };

  return (
    <div>
        <button 
            className="btn btn-primary fab"
            onClick={AddNew}
        >
            <i className="fas fa-plus" ></i>
        </button>
    </div>
  )
}
