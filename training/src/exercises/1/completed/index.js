import React from 'react'

import Switch from '../../../toys/Switch'

export default function Exercise1() {
    const [on, setOn] = React.useState(false)
    return (
        <div>
            <Switch on={on} onClick={() => setOn(!on)}/>
            <p>{`The toggle is: ${on ? 'on' : 'off'}`}</p>
        </div> 
    )
}
