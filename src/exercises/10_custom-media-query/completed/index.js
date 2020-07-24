import React from 'react';

function useMediaQuery(mediaQuery) {
    const [isVerified, setIsVerified] = React.useState(!!window.matchMedia(mediaQuery).matches);

    React.useEffect(() => {
      const mediaQueryList = window.matchMedia(mediaQuery);
      const changeHandler = () => setIsVerified(!!mediaQueryList.matches)
  
      mediaQueryList.addListener(changeHandler);
  
      changeHandler();
      return () => {
        mediaQueryList.removeListener(changeHandler);
      };
    }, [mediaQuery]);
  
    return isVerified;
}

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