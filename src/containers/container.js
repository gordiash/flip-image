import React from 'react'
import Flipper from '../components/Flipper/Flipper'

import './container.css'

export default function container(props) {
    return (
        <div className='container'>
        
            <Flipper imageUrl={props.imageUrl}/>
        </div>
    )
}
