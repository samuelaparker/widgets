import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) { //handles command click (open link in new tab)
            return;
        }
        event.preventDefault(); //prevents defualt page reload
        window.history.pushState({}, '', href) //changes url to match current page

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
    <a onClick={onClick}
    className={className}
    href={href}
    >
    {children}
    </a>
    );
};

export default Link
