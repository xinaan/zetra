import React from 'react';

const Header = ({title, subtitle}) => {
    return (
        <header className="bg-slate-100 py-3 shadow-md fixed top-0 z-50 w-full backdrop-blur-md bg-opacity-70">
            <div className='container mx-auto text-center tracking-widest font-semibold text-xl text-slate-800'>
                <h1 className='text-teal-600'>{ title }</h1>
                <h2 className='text-xs text-slate-500'>{ subtitle }</h2>
            </div>
        </header>
    );
}

export default Header;