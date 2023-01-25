import Cookies from 'universal-cookie';
const cookies = new Cookies();

const MenuItem = (item) => {
    const lang = cookies.get('lang');
    const name_translations = item.item.tname?.split('+'); 
    const description_translations = item.item.description?.split('+');
   
    return (
        
        <section className="mt-4">
            <div className='flex flex-row pb-0 px-3 font-medium mb-0'>
                <div className="basis-5/6">{ name_translations[lang] == null ? name_translations[0]?.toUpperCase() : name_translations[lang]  && name_translations[lang] == null? name_translations[0]?.toUpperCase() : name_translations[lang]?.toUpperCase()  }</div>
                { item.item.price && 
                    <div className="basis-1/6 text-right">{ '$ ' + item.item.price }</div>
                }
            </div>
            { item.item.tags &&       
                <div className="grid grid-flow-col auto-cols-max gap-1 mt-0  px-3 text-xs text-red-100">      
                    { item.item.tags.map((tag, index) => ( 
                        <div key={index}>    
                        { tag.color === 'green' &&   
                            <div className='bg-green-700 rounded px-2 py-0.5' key={ index }>{ tag.tname?.split('+')[lang] == null? tag.name :  tag.tname?.split('+')[lang] }</div>
                        }
                        { tag.color !== 'green' &&
                            <div className='bg-red-700 rounded px-2 py-0.5' key={ index }>{  tag.tname?.split('+')[lang] == null? tag.name :  tag.tname?.split('+')[lang] }</div>
                        }
                        </div>
                    ))}
                </div>
            }
            { item.item.description &&
                <div className='text-left px-3 font-light text-s mt-0 leading-tight w-11/12'>
                    { description_translations[lang] == null ? description_translations[0]?.toLowerCase() : description_translations[lang]?.toLowerCase()  }
                </div>
            }
        </section> 
    );
}
 
export default MenuItem;