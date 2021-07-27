import React,{useState} from "react";
import CreditInfo from "./CreditInfo";
import CreditList from "./CreditList";


function App() {

const [credit, setCredit] = useState([]);

  function addCredit(e) {
    let newCredit = <CreditInfo/>
    setCredit(prev=> [...prev, newCredit])

  }

  return (
    <div>
      <button onClick={addCredit}>Add credit</button>
      <CreditList credits={credit}/> 
    </div>
  );
}

export default App;
