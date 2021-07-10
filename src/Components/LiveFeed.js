import React,{ useState } from 'react'
import axios from 'axios';

export default function LiveFeed() {

    const [rate, setRate] = useState('');

    const URL = 'http://api.exchangeratesapi.io/v1/latest';
    const API_KEY = '05e7ed28b049cbd512ff5252c2413d1b';
    const currency = 'USD';
        
    const getData = () => {
        axios.get(URL+`?access_key=${API_KEY}&base=EUR&symbols=${currency}`)
        .then(res => {
            console.log(res.data.rates);
            setRate(res.data.rates.USD);
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div className='login__feed'>
            <span>EUR/USD: ${rate}</span>
            <span className="login__feed-button"><box-icon name='refresh' color="#f2f2f2" onClick={getData} ></box-icon></span>    
        </div>
    )
}
