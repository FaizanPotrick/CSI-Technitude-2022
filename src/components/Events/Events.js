import React from 'react'
import './Events.css'
import event1 from '.././../assets/events/ESCAPE OUT.png'
import event2 from '.././../assets/events/BUY BEG.png'
import event3 from '.././../assets/events/UPSIDE DOWN.png'
import event4 from '.././../assets/events/WORD FACEOFF.png'
import event5 from '.././../assets/events/ideobition.png'
import event6 from '.././../assets/events/lightoutcode.png'
import event7 from '.././../assets/events/locknkey.png'
import event8 from '.././../assets/events/room2050.png'


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
        {
            event: 7,
            image: event7,
        },
        {
            event: 8,
            image: event8,
        },
    ]

    return (
        <div className='events  my-4'>
            <h2 className='text-center'>Events</h2>
            <div className="container-fluid carousel d-flex align-items-center mt-3">
                {events.map((event, index) => {
                    return (
                        <div className="event-card me-2" key={index}>
                            <img src={event.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events