import React from 'react';

import { getPrimes, DisplayPrimes } from './helpers';

export default class Exercise5 extends React.Component {
    state = {
      max: 10,
      loading: false,
    }

    handleClick = () => {
      this.setState(({ loading }) => ({ loading: !loading }));
    }

    handleInputChange = (e) => {
      this.setState({ max: e.target.value });
    }

    render() {
      // 🦁 This is calculated every time. Not efficient!
      // https://reactjs.org/docs/hooks-reference.html#usememo
      const numberOfPrimes = getPrimes(this.state.max);

      return (
        <div>
          <DisplayPrimes
            max={this.state.max}
            loading={this.state.loading}
            numberOfPrimes={numberOfPrimes}
            onButtonClick={this.handleClick}
            onInputChange={this.handleInputChange}
          />
        </div>
      );
    }
}
