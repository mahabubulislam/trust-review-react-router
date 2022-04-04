import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link className='sm:mr-2 sm:p-0 md:mr-4 p-2 md:text-3xl'
                style={{ textDecoration: match ? "underline" : "none", color: match ? '#f87171' : 'black' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;