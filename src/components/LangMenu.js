import Cookies from 'universal-cookie';
const cookies = new Cookies();


const LangMenu = ({ menuClick}) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700 backdrop-blur-sm bg-opacity-75 z-50" onClick={menuClick}>
            <div className="grid place-items-center h-screen z-40">
                <div className="flex flex-col border-4 px-3 py-3 rounded-md bg-slate-200 shadow-md text-sm">
                    <div className="grid grid-cols-2 gap-3">
                        

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm " onClick={() => cookies.set('lang', 0, { path: '/' })} >
                                <img src={process.env.PUBLIC_URL + '/lang/en.png'} alt='back icon' className='h-10' />
                            </div>

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm" onClick={() => cookies.set('lang', 1, { path: '/' })}>
                                <img src={process.env.PUBLIC_URL + '/lang/it.png'} alt='back icon' className='h-10'/>
                            </div>

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm" onClick={() => cookies.set('lang', 2, { path: '/' })}>
                                <img src={process.env.PUBLIC_URL + '/lang/es.png'} alt='back icon' className='h-10'/>
                            </div>

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm" onClick={() => cookies.set('lang', 3, { path: '/' })}>
                                <img src={process.env.PUBLIC_URL + '/lang/fr.png'} alt='back icon' className='h-10'/>
                            </div>

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm" onClick={() => cookies.set('lang', 4, { path: '/' })}>
                                <img src={process.env.PUBLIC_URL + '/lang/ru.png'} alt='back icon' className='h-10'/>
                            </div>

                            <div className="flex-none w-14 h-10 bg-cover bg-center  rounded-md text-center overflow-hidden cursor-pointer shadow-sm" onClick={() =>cookies.set('lang', 5, { path: '/' })}>
                                <img src={process.env.PUBLIC_URL + '/lang/cn.png'} alt='back icon' className='h-10' />
                            </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div> 
     );
}
 
export default LangMenu;