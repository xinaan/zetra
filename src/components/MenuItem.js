const MenuItem = (item) => {
    
    return (
        
        <section className="mt-4">
            <div className='flex flex-row pb-0 px-3 font-medium mb-0'>
                <div className="basis-5/6">{ item.item.name && item.item.name.toUpperCase() }</div>
                { item.item.price && 
                    <div className="basis-1/6 text-right">{ '$ ' + item.item.price }</div>
                }
            </div>
            { item.item.tags &&       
                <div className="grid grid-flow-col auto-cols-max gap-1 mt-0  px-3 text-xs text-red-100">      
                    { item.item.tags.map((tag, index) => (                    
                        <div className='bg-red-700 rounded px-2 py-0.5' key={ index }>{ tag.name }</div> 
                    ))}
                </div>
            }
            { item.item.description &&
                <div className='text-left px-3 font-light text-s mt-0 leading-tight w-5/6'>
                    { item.item.description.toLowerCase() }
                </div>
            }
        </section> 
    );
}
 
export default MenuItem;