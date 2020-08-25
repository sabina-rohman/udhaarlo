import React from 'react';
import './lender.css';

const Borrower = (props) => {
  const {name, id} = props.data;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-id">{id}</p>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  )
};

export default Borrower;