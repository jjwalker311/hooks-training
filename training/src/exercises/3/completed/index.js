import React from 'react'

function usePageYOffset() {
    const [position, setPosition] = React.useState(0)

    React.useEffect(() => {
        // Scroll handler
        function handleScroll() {
            setPosition(window.pageYOffset.toFixed(0))
        }

        //Only add listener on mount
        window.addEventListener('scroll', handleScroll, true);
        
        // Remove listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return position
}

export default function Exercise3() {
    const position = usePageYOffset()
    return (
        <div style={{ height: '100vh'}}>
            <p style={{marginTop: '25vh'}}>{`The scroll position is: ${position}px`}</p>
        </div>
    ) 
}
