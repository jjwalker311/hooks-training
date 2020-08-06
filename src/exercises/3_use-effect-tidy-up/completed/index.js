import React from 'react'

function usePageYOffset() {
  const [position, setPosition] = React.useState(0)

  React.useEffect(() => {
    // Scroll handler
    function handleScroll(event) {
      const newPosition = window.pageYOffset || event.target.scrollY || 0
      setPosition(newPosition.toFixed(0))
    }

    // Only add listener on mount
    window.addEventListener('scroll', handleScroll)

    // Remove listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}

export default function Exercise3() {
  const position = usePageYOffset()
  return (
    <div style={{ height: '100vh' }}>
      <p style={{ marginTop: '25vh' }}>{`The scroll position is: ${position}px`}</p>
    </div>
  )
}
