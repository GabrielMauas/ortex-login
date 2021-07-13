import React from 'react';
import LiveFeed from './LiveFeed';

export default function Navbar() {

    return (
        <div className='login__navbar'>

            <img className='login__logo' src="https://ortex-static-files.s3.amazonaws.com/static/images/ortex_logo_h-white.svg" alt="Logo" />
            <LiveFeed />

        </div>
    )
}