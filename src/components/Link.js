import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        event.preventDefault(); //prevents defualt page reload
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
