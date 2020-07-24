import React from 'react';

// 📚 API => https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
//
// 👍 Check matches query (returns true if matches)
// window.matchMedia(SOME_QUERY).matches
// 
// 👂Add listener on document resize (Remember to tidy up after yourselves!)
// const mediaQueryList = window.matchMedia(SOME_QUERY);
// mediaQueryList.addListener(() => Do something on change....)

function useMediaQuery() { return true }

export default function() {
    const isSmall = useMediaQuery('(max-width: 1024px)')
    const isBig = useMediaQuery('(min-width: 1024px)')
    return (
        <div>
            <br></br><br></br>
            <ul>
                <li>Small: { isSmall ? 'Yes' : 'No' }</li>
                <li>Big: { isBig ? 'Yes' : 'No' }</li>
            </ul>
        </div>
    )
}