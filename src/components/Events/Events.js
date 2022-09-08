import React from 'react'
import './Events.css'
import event1 from '.././../assets/Upside.png'
import event2 from '.././../assets/Escape.png'
import event3 from '.././../assets/monopoly.png'
import event4 from '.././../assets/ideathon.png'
import event5 from '.././../assets/sherlock.png'
import event6 from '.././../assets/off.png'


const Events = () => {

    const events = [
        {
            event: 1,
            image: event1,
        },
        {
            event: 2,
            image: event2,
        },
        {
            event: 3,
            image: event3,
        },
        {
            event: 4,
            image: event4,
        },
        {
            event: 5,
            image: event5,
        },
        {
            event: 6,
            image: event6,
        },

    ]

    return (
        <div className='events  my-4'>
            <h2 className='text-center'>Events</h2>
            <div className="container-fluid carousel d-flex align-items-center mt-3">
                {events.map((event) => {
                    return (
                        <div className="event-card me-2">
                            <img src={event.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events