import React from 'react'

export function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes.length;
}

export class DisplayPrimes extends React.PureComponent {
    render() {
        console.log('<DisplayPrimes /> has been re-rendered!!!')
        const { max, loading, numberOfPrimes, onButtonClick, onInputChange } = this.props
        return (
            <div>
                    <br></br>
                    <label>
                        Count primes up to:
                        <input
                            type="number"
                            value={max}
                            onChange={onInputChange}
                            style={{fontSize: '20px'}}
                        />
                    </label>
                    <br></br>
                    <h2>
                        {`Prime numbers: ${numberOfPrimes}`}
                    </h2>
                    <br></br>
                    <button onClick={onButtonClick}>
                        {loading ? 'LOADING' : 'NOT LOADING'}
                    </button>
                </div>
        ) 
    }
}
