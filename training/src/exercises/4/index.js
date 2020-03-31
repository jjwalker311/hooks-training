import React from 'react'

import { StopWatch, reducer } from './helpers'

export default class Exercise4 extends React.Component {
    state = {
        lapse: 0,
        running: false,
    }

    // 🦁 https://reactjs.org/docs/hooks-reference.html#useref
    //  const timerRef = React.useRef(null)
    timerRef = React.createRef()


    // 🦁 https://reactjs.org/docs/hooks-reference.html#usereducer
    // Use "useReducer" to initialise state and return what we need (lapse, running, dispatch function)

    handleRunClick = () => {
        if (this.state.running) {
            clearInterval(this.timerRef.current)
        } else {
            const startTime = Date.now() - this.state.lapse
            this.timerRef.current = setInterval(() => {
                const lapse = Date.now() - startTime

                // 🦁 Add dispatch to update the tick
                this.setState(reducer(this.state, { type: 'tick', payload: lapse }))
            }, 0)
        }
        // 🦁 Add dispatch to toggle running
        this.setState(reducer(this.state, { type: 'toggle' }))
    }

    handleClearClick = () => {
        clearInterval(this.timerRef.current)
        // 🦁 Add dispatch to clear
        this.setState(reducer(this.state, { type: 'clear' }))
    }

    render() {  
        return (
            <div>
                <StopWatch 
                    lapse={this.state.lapse}
                    running={this.state.running}
                    onRunClick={this.handleRunClick}
                    onClearClick={this.handleClearClick}
                />
            </div>
        )
    }
}
