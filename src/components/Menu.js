import React from 'react';
import sanityClient from '../client.js';
import MenuItem from './MenuItem.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Menu(){
    const [menuData, setMenu] = useState(null);
    const { id } = useParams();
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

        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-0.5 lg:w-4/12 select-none mb-10'>
            <section >
                <div className='mt-16'></div>
                { menuData && menuData.map((menus, index) => ( 
                    <section key={ menus._id }>
                        { menus.catergory && menus.catergory.map((item, index) => (
                            <section key={ item._id }>
                            <div className='text-left pb-2.5 px-3 border-b-4 mt-3 border-teal-800 font-bold mb-0 text-teal-600'>
                                { item.name.toUpperCase() }
                            </div>

                            { item.items && item.items.map((el) => (
                                <MenuItem item = { el } />
                            ))}
                            </section>
                        ))}
                    </section>
                ))}
                   
                
            </section>
        </main>
    )
}