import React,{ useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


export default function LiveFeed() {

    const [rate, setRate] = useState('');
    // const [time, setTime] = useState();
    // console.log(date);
    const client = new W3CWebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');
    client.onopen = () => {
        // console.log('WebSocket connected');  
        client.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');      

    }
    useEffect(() => {
        client.onmessage = message => {
            const price = JSON.parse(message.data);

            setRate(price.price);

        }
    })


    
    return (
        <div className='login__feed' >
            {/* <span>{time}</span> */}
            <span>EUR/USD: {rate ? `$${rate}` : 'Loading...'}</span>
            {/* <span className="login__feed-button"><box-icon name='refresh' color="#f2f2f2" ></box-icon></span>     */}
        </div>
    )
}
