import React from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Panel from './Panel.js';

export default function Outlet(){
    const [outletMenu, setOutletMenu] = useState(null);
    const { id } = useParams();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'outlet' && _id =='${id}']{
                name,
                _id,
                menus[]->{
                  _id,
                  name,
                  thumb{
                    asset->{
                      _id,
                      url
                    }
                }
              }}`)
              .then((data) => setOutletMenu(data))
              .catch(console.error);
              
    },[id]);
    return (
        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-0.5 lg:w-4/12 mb-10'>
            <section >
                <div className='mt-16'></div>
                { outletMenu && outletMenu.map((outlet, index) => (
                    <section key={ outlet._id }>
                        { outlet.menus && outlet.menus.map((menu) => (
                            <div>
                                { menu.name === day &&
                                    <Panel id = { menu._id } name = { 'Daily Menu - ' + menu.name } url = { menu.thumb && menu.thumb.asset.url } type = 'menu'/>
                                }
                                { menu.name.length > 9 &&
                                    <Panel id = { menu._id } name = { menu.name } url = { menu.thumb && menu.thumb.asset.url } type = 'menu'/>
                                }
                            </div>
                        ))}
                    </section>
                ))}
                   
                
            </section>
        </main>
    )
}