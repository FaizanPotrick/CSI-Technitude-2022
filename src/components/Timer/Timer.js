import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {

    const [counts, setCounts] = useState(
        {
            day: "00",
            hour: "00",
            minute: "00",
            second: "00"
        }
    )

    useEffect(() => {
        const deadline = new Date("Sep 15, 2022 12:00:00").getTime();
        const x = setInterval(function () {
            const now = new Date().getTime();
            const t = deadline - now;
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((t % (1000 * 60)) / 1000);
            setCounts({ ...counts, day: days, hour: hours, minute: minutes, second: seconds })
            if (t < 0) {
                clearInterval(x);
                setCounts({ ...counts, day: 0, hour: 0, minute: 0, second: 0 })
            }
        }, 1000);
    }, [])

    return (
        <div className='timer p-4 my-4'>
            <h2 className='text-center'>Starts IN</h2>
            <div className=" container d-flex align-items-center justify-content-center">
                <h1>{counts.day}D</h1>
                <h1 className='mx-2 mx-md-3'>:</h1>
                <h1>{counts.hour}H</h1>
                <h1 className='mx-2 mx-md-3'>:</h1>
                <h1>{counts.minute}M</h1>
                <h1 className='mx-2 mx-md-3'>:</h1>
                <h1>{counts.second}S</h1>
            </div>
        </div>
    )
}

export default Timer