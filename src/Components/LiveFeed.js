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
            <span> {rate ? `EUR/USD: $${rate}` : <box-icon name='loader-alt' animation='spin' rotate='270' color="#f2f2f2"></box-icon>}</span>
        </div>
    )
}
