import React from 'react';
import sanityClient from '../client.js';
import MenuItem from './MenuItem.js';
import MenuSection from './MenuCatergory.js';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Menu(){
    const [menuData, setMenu] = useState(null);
    const { id } = useParams();

    const [menuShown, setMenuShown] = useState(false);
    const menuClick = () => {
        setMenuShown(!menuShown);
    }
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'menu' && _id == '${id}']{
                _id,
                name,
                outlet->{name},
                catergory[]->{
                  _id,
                  name,
                  items[]->{
                    _id,
                    name,
                    description,
                    price,
                    tags[]->{
                      _id,
                      name
                    }
                  }
              }}`)
              .then((data) => setMenu(data))
              .catch(console.error);
              
    },[id]);

   
    return (

        

        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-10 lg:w-4/12 select-none mb-24 scroll-smooth'>
            <section >
                { menuData && menuData.map((menus, index) => ( 
                    <section key={ menus._id }>
                        { menus.catergory && menus.catergory.map((item, index) => (
                            <section key={ item._id } className='snap-y'>
                            <div id={ item.name.toUpperCase() } className='text-left pb-2.5 px-3 border-b-4 mt-6 border-teal-800 font-bold mb-0 text-teal-600 scroll-mt-20 snap-start'>
                                { item.name.toUpperCase() }
                            </div>

                            { item.items && item.items.map((el) => (
                                <MenuItem item = { el } />
                            ))}
                            </section>
                        ))}
                        
                        { menuShown && <MenuSection item = { menus.catergory } menuClick={menuClick}/>}
                        <div className='fixed bottom-16 right-5 rounded-full px-4 py-2 bg-cyan-700 text-cyan-50 shadow-md hover:bg-teal-700 z-50' onClick={ menuClick }>MENU</div>
                    </section>
                ))}
                   
                
            </section>
        </main>
    )
}