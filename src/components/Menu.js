import React from 'react';
import sanityClient from '../client.js';
import ReactLoading from 'react-loading';
import MenuItem from './MenuItem.js';
import MenuSection from './MenuCatergory.js';
import SubItem from './SubItem.js';
import Cookies from 'universal-cookie';


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Menu(){
    const [menuData, setMenu] = useState(null);
    const [done ,setDone] = useState(undefined);
    const { id } = useParams();
    const cookies = new Cookies();
    const lang = cookies.get('lang');

    const [menuShown, setMenuShown] = useState(false);
    const menuClick = () => {
        setMenuShown(!menuShown);
    }
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'menu' && _id == '${id}']{
                _id,
                name,
                tname,
                outlet->{name},
                catergory[]->{
                  _id,
                  name,
                  tname,
                  items[]->{
                    _id,
                    name,
                    tname,
                    description,
                    price,
                    tags[]->{
                      _id,
                      name,
                      tname,
                      color
                    }
                  },
                  sub[]->{
                    _id,
                    name,
                    tname,  
                    items[]->{
                    _id,
                    name,
                    description,
                    price,
                    tags[]->{
                      _id,
                      name,
                      tname,
                      color
                    }
                  }
                  }
              }}`)
              .then((data) => {
                  setMenu(data);
                  setDone(true);
              })
              .catch(console.error);
              
    },[id]);

   
    return (

        

        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-10 lg:w-4/12 select-none mb-96 scroll-smooth'>
            { !done ? <div className='grid place-items-center h-screen -mt-24'><ReactLoading type={'spin'} color={'#0D9488'} height={50} width={50} /></div> :
            <>
                { menuData && menuData.map((menus, index) => ( 
                    <section key={ menus._id } className='mb-32'>
                        { menus.catergory && menus.catergory.map((item, index) => (
                            <section key={ item._id } className='snap-y'>
                            <div id={ item.name.toUpperCase() } className='text-left pb-2.5 px-3 border-b-4 mt-8 border-teal-800 font-bold mb-0 text-teal-600 scroll-mt-20 snap-start'>
                                { item.tname?.split('+')[lang] == null? item.name.toUpperCase()  : item.tname?.split('+')[lang]?.toUpperCase() }
                            </div>

                            { item.items && item.items.map((el) => (
                                <div key={el._id}><MenuItem item = { el } /></div>
                            ))}

                            { item.sub && item.sub.map((sub) => (
                                <div key={sub._id}><SubItem item = { sub } /></div>
                            ))}
                            </section>
                        ))}
                        
                        { menuShown && <MenuSection item = { menus.catergory } menuClick={menuClick}/>}
                        <div className='fixed bottom-20 right-5 rounded-full px-4 py-2 bg-cyan-700 text-cyan-50 shadow-md hover:bg-teal-700 z-40' onClick={ menuClick }>MENU</div>
                    </section>
                ))}
                   
                
            </>
            }
        </main>
    )
}