const MenuItem = (item) => {
    
    return (
        
        <section>
            <div className='flex flex-row pb-0 px-3 font-medium mb-0 mt-2'>
                <div className="basis-3/4">{ item.item.name }</div>
                <div className="basis-1/4 text-right">{ item.item.price }</div>
            </div>
            { item.item.tags &&
                <section>
                    { item.item.tags && 
                        <div className="grid grid-flow-col auto-cols-max gap-1 mt-0  px-3 text-xs text-red-100">      
                            { item.item.tags.map((tag, index) => (                    
                                <div className='bg-red-700 rounded px-2 py-0.5' key={ index }>{ tag.name }</div> 
                            ))}
                        </div>
                    }
                </section>
            }
            { item.item.description &&
                <div className='text-left pb-3 px-3 font-light text-s'>
                    { item.item.description }
                </div>
            }
        </section> 
    );
}
 
export default MenuItem;