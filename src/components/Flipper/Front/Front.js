import React from 'react'
import './Front.css'

export default function Front(props) {

    const styled={
        'width': '300px',
        'height': '400px'
    }



    return (
        <div className="front">

        {props.imageUrl === "" ?
        <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="img" style={styled}/>
        :
        <img src={props.imageUrl} alt="img" style={styled}/>
        }
            
        </div>
    )
}
