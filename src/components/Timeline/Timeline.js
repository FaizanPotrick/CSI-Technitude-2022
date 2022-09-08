import React from 'react'
import './Timeline.css'
import Image from '../../assets/Timeline.png'

const Timeline = () => {
    return (
        <div className='timeline d-flex flex-column align-items-center justify-content-center my-4'>
            <h2 className='mb-3'>Event Timeline</h2>
            <img src={Image} alt="timeline" className='img-fluid my-3' />
        </div>
    )
}

export default Timeline