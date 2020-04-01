import React from 'react'

import { getPrimes, DisplayPrimes } from '../helpers'

export default function Exercise5 () {
    const [max, setMax] = React.useState(10)
    const [loading, setLoading] = React.useState(false)

    const numberOfPrimes = React.useMemo(() => getPrimes(max), [max])

    return (
        <div>
            <DisplayPrimes 
                max={max}
                loading={loading}
                numberOfPrimes={numberOfPrimes}
                onButtonClick={() => setLoading(!loading)}
                onInputChange={(e) => setMax(e.target.value)}
            />
        </div>
    )
}
