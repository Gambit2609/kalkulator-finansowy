import React, {useState} from 'react';

function CreditInfo() {

    const [creditType, setCreditType] = useState("");
    const [creditAmount, setCreditAmount] = useState("");
    const [creditMonthlyPayment, setCreditMonthlyPayment] = useState("");
    const [rateOfInterest, setRateOfInterest] = useState("");

    function handleChange(e){
        const {id, value} = e.target;
        id === "credit-info" && setCreditType(value);
        id === "credit-amount" && setCreditAmount(value);
        id === "credit-monthly-payment" && setCreditMonthlyPayment(value);
        id === "rate-of-interest" && setRateOfInterest(value);
    }

    return (
            <div className="credit-info-container">
                <label htmlFor="credit-info">Rodzaj zobowiązania
                        <select id="credit-info" value={creditType} onChange={handleChange}>
                            <option value="">----</option>
                            <option value="consumer-loan">Kredyt konsumpcyjny</option>
                            <option value="mortgage">Kredyt hipoteczny</option>
                            <option value="investment-loan">Kredyt inwestycyjny</option>
                            <option value="consolidation-loan">Kredyt konsolidacyjny</option>
                            <option value="credit-card">Karta kredytowa</option>
                        </select>
                    </label>
                    <label htmlFor="credit-amount">Całkowita kwota kredytu
                        <input onChange={handleChange} value={creditAmount} type="number" id="credit-amount" />
                    </label>
                    <label htmlFor="credit-monthly-payment">Rata miesięczna
                        <input type="text" onChange={handleChange} value={creditMonthlyPayment} id="credit-monthly-payment" />
                    </label>
                    <label htmlFor="rate-of-interest">Oprocentowanie
                        <input type="text" onChange={handleChange} value={rateOfInterest} id="rate-of-interest" />
                    </label>
            </div>
    )
}

export default CreditInfo;