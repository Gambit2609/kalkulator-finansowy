import React, {useState} from 'react';
import CreditInfoContainer from './CreditInfoContainer';

function CreditList(){

const [creditList, setCreditList] = useState([<CreditInfoContainer onSubmit={addCredit}/>]);


function addCredit(e){
e.preventDefault();
setCreditList(prev=> prev.push(<CreditInfoContainer onSubmit={addCredit}/>))
}

return (
<div>
    {creditList}
</div>
)
}

export default CreditList;