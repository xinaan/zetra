import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (item) => {
    return (
        <footer className="bg-slate-300 py-3 fixed bottom-0 z-50 w-full">
            <div className='container mx-auto'>
            <div className='flex flex-row px-7 justify-between gap-5 text-center tracking-widest font-semibold text-xl text-slate-800'>
                <Link to = { '/'}><h1 className='text-teal-700 px-4'>BACK</h1></Link>
                <Link to = { '/'}><h1 className='text-teal-700 px-4'>HOME</h1></Link>

            </div>
            </div>
        </footer>
    );
}

export default Footer;