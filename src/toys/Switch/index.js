import './switch.styles.css'
import React from 'react'

const noop = () => {}

export default class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <label
        aria-label={ariaLabel || 'Toggle'}
        style={{ display: 'block' }}
        htmlFor="toggle-checkout"
      >
        <input
          id="toggle-checkout"
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <span className={btnClassName} {...props} />
      </label>
    )
  }
}
