import React from 'react';
import CreditInfo from './CreditInfo';


function CreditList(props) {

    function generateRandomKey(){
        return Math.floor(Math.random()*10000);
        }

    return (
        <div>
            {props.credits.map(x=> <CreditInfo key={generateRandomKey()}/>)}
        </div>
    )
}

export default CreditList;