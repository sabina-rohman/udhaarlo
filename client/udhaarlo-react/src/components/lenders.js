import React, { Component } from 'react';
import Lender from './lender';
import './lenders.css';

class Lenders extends Component{
    render(){
        const {lenders} = this.props;
        const lenderList = lenders.map((lender, index) => (
            <Lender key={index} data={lender} />
        ))
        return (
            <div>
                <h1>Lenders:</h1>
                <div className="lenders-list">{lenderList}</div>
            </div>
        )
    }
}

export default Lenders;