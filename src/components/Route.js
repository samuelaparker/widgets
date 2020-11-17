//no JSX so no need to import react
import { useEffect, useState } from 'react';

const Route = ({ path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname); //this state exists so route updates

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);
    return currentPath === path ? children : null; 
};



export default Route
