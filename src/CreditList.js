import React, { useState } from 'react';
import CreditInfoContainer from './CreditInfoContainer';

function CreditList() {

    const [creditList, setCreditList] = useState([]);


    function submitCreditInfo(e) {
        setCreditList(prev => prev.push(<CreditInfoContainer />))
        console.log(creditList)
    }

    return (
        <div>
            <CreditInfoContainer onSubmit={submitCreditInfo} />
            {creditList}
        </div>
    )
}

export default CreditList;