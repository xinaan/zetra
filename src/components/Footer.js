import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LangMenu from './LangMenu.js';

const Footer = (item) => {
    const navigate = useNavigate();
    const currentpage = window.location.pathname;

    const [langMenu, setMenuShown] = useState(false);
    const menuClick2 = () => {
        if(langMenu === true){
            window.location.reload(false);
        }
        setMenuShown(!langMenu);
        
    }
    return (
        <div>
        { currentpage !== '/' && 
            <footer className="bg-slate-200 py-3 fixed bottom-0 z-50 w-full backdrop-blur-md bg-opacity-70">
                <div className='container mx-auto md:w-1/4'>
                    <div className='flex flex-row px-7 justify-between items-center gap-5 text-center tracking-widest font-semibold text-xl text-slate-800'>
                        <img src={process.env.PUBLIC_URL + '/icons/back.svg'} alt='back icon' className='w-8 h-8 cursor-pointer' onClick={() => navigate(-1)}/>
                        <img src={process.env.PUBLIC_URL + '/icons/home.svg'} alt='home icon' className='w-10 h-10 cursor-pointer' onClick={() => navigate('/')}/>
                        <img src={process.env.PUBLIC_URL + '/icons/menu.svg'} alt='back icon' className='w-8 h-8 cursor-pointer' onClick={menuClick2}/>

                    </div>
                </div>

                
                
                
            </footer>
            
        }
        { langMenu && <LangMenu menuClick={menuClick2}/>}
        </div>
    );
}

export default Footer;