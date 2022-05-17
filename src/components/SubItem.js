const SubItem = (item) => {
    return (
        
            <section key={ item._id }>
                <div className='text-left px-3  mt-6 font-bold mb-0 text-teal-600'>
                    { item.item.name.toUpperCase() }
                </div>
            {item.item.items && item.item.items.map((sub, index) =>(
                <section className="mt-3" key={sub._id}>
                    <div className='flex flex-row pb-0 px-3 font-medium mb-0'>
                        <div className="basis-5/6">{ sub.name && sub.name.toUpperCase() }</div>
                        { sub.price && 
                            <div className="basis-1/6 text-right">{ '$ ' + sub.price }</div>
                        }
                    </div>
                    { sub.tags && 
                        <div className="grid grid-flow-col auto-cols-max gap-1 mt-0  px-3 text-xs text-red-100">      
                            { sub.tags.map((tag, index) => ( 
                                <div key={index}>    
                                { tag.name === 'Veg' &&   
                                    <div className='bg-green-700 rounded px-2 py-0.5' key={ index }>{ tag.name }</div>
                                }
                                { tag.name !== 'Veg' &&
                                    <div className='bg-red-700 rounded px-2 py-0.5' key={ index }>{ tag.name }</div>
                                }
                                </div>
                            ))}
                        </div>
                    }
                    { sub.description &&
                        <div className='text-left px-3 font-light text-s mt-0 leading-tight w-11/12'>
                            { sub.description.toLowerCase() }
                        </div>
                    }
                </section>
                ))}
            </section>
       
    );
}
 
export default SubItem;