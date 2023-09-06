//match each viewport of media query - catch the current size of the screen
import React, { useEffect } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    useEffect(() => {
        //matches with particular each viewport for at a viewpoint px
        const media = window.matchMedia(query);
        console.log(media)
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        //create listener event
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query])

    return matches
}

export default useMediaQuery