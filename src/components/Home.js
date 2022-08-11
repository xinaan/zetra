import React from 'react';
import sanityClient from '../client.js';
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import Panel from './Panel.js';


export default function Home(){
    const [outletData, setOutlet] = useState(null);
    const [done ,setDone] = useState(undefined);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'property' && name =='Cocoon Maldives']{
                name,
                outlets[]->{
                  _id,
                  name,
                  thumb{
                   asset->{
                     _id,
                     url
                }
                }
                }
              }`)
              .then((data) => {
                  setOutlet(data);
                  setDone(true);
                })
              .catch(console.error);
              
    },[]);

    
    return (
  
        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-0.5 lg:w-4/12 mb-10'>
                <div className='mt-16'></div>
                
                { !done ? <div className='grid place-items-center h-screen -mt-24'><ReactLoading type={'spin'} color={'#0D9488'} height={50} width={50} /></div> : 
                <>
                
                { outletData && outletData.map((property, index) => (
                    <section className='grid grid-cols-1 gap-3 md:grid-cols-2' key={ property.name }>
                        { property.outlets.map((outlet) => (
                            <div key={outlet._id}><Panel id = { outlet._id } name = { outlet.name } url = { outlet.thumb && outlet.thumb.asset.url } type = 'outlet'/></div>
                        ))}
                    </section>
                ))}
                </>
                }

                   
        </main>
    )
}