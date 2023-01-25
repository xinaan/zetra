import React from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Panel from './Panel.js';
import Cookies from 'universal-cookie';

export default function Outlet(){
    const [outletMenu, setOutletMenu] = useState(null);
    const [done ,setDone] = useState(undefined);
    const { id } = useParams();
    const cookies = new Cookies();
    const lang = cookies.get('lang');

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
                  tname,
                  thumb{
                    asset->{
                      _id,
                      url
                    }
                }
              }}`)
              .then((data) => {
                  setOutletMenu(data);
                  setDone(true);
              })
              .catch(console.error);
              
    },[id]);
    return (
        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-0.5 lg:w-4/12 mb-10'>
            <section >
                <div className='mt-16'></div>
                { !done ? <div className='grid place-items-center h-screen -mt-24'><ReactLoading type={'spin'} color={'#0D9488'} height={50} width={50} /></div> :
                <>
                { outletMenu && outletMenu.map((outlet, index) => (
                    <section key={ outlet._id }>
                        { outlet.menus && outlet.menus.map((menu) => (
                            <div key={ menu._id }>
                                { menu.name === day &&
                                    <div key={menu._id}><Panel id = { menu._id } name = { menu.tname?.split('+')[lang] == null? 'Daily Menu - ' + menu.name : menu.tname?.split('+')[lang]} url = { menu.thumb && menu.thumb.asset.url } type = 'menu'/></div>
                                }
                                { menu.name.length > 9 &&
                                    <div key={menu._id}><Panel id = { menu._id } name = { menu.tname?.split('+')[lang] == null? menu.name : menu.tname?.split('+')[lang] } url = { menu.thumb && menu.thumb.asset.url } type = 'menu'/></div>
                                }
                            </div>
                        ))}
                    </section>
                ))}
                </>
                }
                   
                
            </section>
        </main>
    )
}