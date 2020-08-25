import React, { Component } from 'react';
import Borrower from './borrower';
import './lenders.css';

class Borrowers extends Component{
    render(){
        const { borrowers } = this.props;
        const borrowerList = borrowers.map((borrower, index) => (
            <Borrower key={index} data={borrower} />
        ))
        return(
            <div>
                <h1>Borrowers:</h1>
                <div className="lenders-list">{borrowerList}</div>
            </div>
        )
    }
}

export default Borrowers;