import React from 'react'

export function getPrimes(max) {
  const sieve = []; let i; let j; const
    primes = []
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }
  return primes.length
}

export class DisplayPrimes extends React.PureComponent {
  render() {
    console.log('<DisplayPrimes /> has been re-rendered!!!')
    const {
      max, loading, numberOfPrimes, onButtonClick, onInputChange,
    } = this.props
    return (
      <div>
        <br />
        <label htmlFor="number-input">
          Count primes up to:
          <input
            id="number-input"
            type="number"
            value={max}
            onChange={onInputChange}
            style={{ fontSize: '20px' }}
          />
        </label>
        <br />
        <h2>
          {`Prime numbers: ${numberOfPrimes}`}
        </h2>
        <br />
        <button onClick={onButtonClick} type="button">
          {loading ? 'LOADING' : 'NOT LOADING'}
        </button>
      </div>
    )
  }
}
