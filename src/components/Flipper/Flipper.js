import React from 'react'
import Front from './Front/Front'
import Back from './Back/Back'

import "./Flipper.css"



export default function Flipper(props) {
    return (
        <div className="flipper">

        <Front imageUrl={props.imageUrl} />

        <Back/>
            
        </div>
    )
}
