import React from 'react';
import sanityClient from '../client.js';

import { useEffect, useState } from 'react';
import Panel from './Panel.js';


export default function Home(){
    const [outletData, setOutlet] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'property' && name =='You & Me Maldives']{
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
              .then((data) => setOutlet(data))
              .catch(console.error);
              
    },[]);

    
    return (
  
        <main className='container mx-auto px-4 py-5 bg-sky-50 mt-0.5 lg:w-4/12 mb-10'>
                <div className='mt-16'></div>
                { outletData && outletData.map((property, index) => (
                    <section className='grid grid-cols-1 gap-3 md:grid-cols-2' key={ index }>
                        { property.outlets.map((outlet) => (
                            <Panel id = { outlet._id } name = { outlet.name } url = { outlet.thumb && outlet.thumb.asset.url } type = 'outlet'/>
                        ))}
                    </section>
                ))}
                   
        </main>
    )
}