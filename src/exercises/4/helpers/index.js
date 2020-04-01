import React from 'react';

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
};

function StopWatch({
  lapse, running, onRunClick, onClearClick,
}) {
  return (
    <>
      <label
        htmlFor="stop-start-button"
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {lapse}
        ms
      </label>
      <button onClick={onRunClick} style={buttonStyles} id="stop-start-button" type="button">
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={onClearClick} style={buttonStyles} type="button">
        Clear
      </button>
    </>
  );
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'clear':
      return { running: false, lapse: 0 };

    case 'toggle':
      return {
        ...state,
        running: !state.running,
      };

    case 'tick':
      return {
        ...state,
        lapse: payload,
      };

    default:
      throw new Error();
  }
}

export { StopWatch, reducer };
