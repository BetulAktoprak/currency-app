import { useState } from 'react';
import '../css/currency.css'
import { FaRightLong } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let apiKey = import.meta.env.VITE_API_KEY;

function Currency() {

    const[amount, setAmount] = useState(1);
    const[fromCurrency, setFromCurrency] = useState('USD');
    const[toCurrency, setToCurrency] = useState('TRY');
    const[result, setResult] = useState(0);

    const exchange = async() => {
        const response = await axios.get(`${BASE_URL}?apikey=${apiKey}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

  return (
    <div className='currency-div'>
        <div className='h3-div'>
            <h3>DÖVİZ KURU UYGULAMASI</h3>  
        </div>
        <div style={{marginTop: '25px' }}>
            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number" className='amount' />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='currency-option'>
                <option>USD</option>
                <option>EUR</option>
                <option>TL</option>
            </select>

            <FaRightLong style={{fontSize: '25px', marginRight: '10px'}} />

            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='currency-option'>
                <option>TL</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
            <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='amount' />
        </div>
        <div>
            <button onClick={exchange} className='exchange-button'>Çevir</button>
        </div>
    </div>
  )
}

export default Currency