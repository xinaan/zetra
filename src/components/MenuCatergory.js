
const MenuSection = ({item, menuClick}) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700 backdrop-blur-sm bg-opacity-75 z-50" onClick={menuClick}>
            <div className="mx-auto fixed bottom-32 right-5">
                <ul className="flex flex-col border-4 px-2 py-2 rounded-md bg-slate-200 shadow-md text-sm">
                    {item.map((section, index) => (
                        <li key={ section._id } className='px-1 py-1'><a href = {'#' + section.name.toUpperCase() } onClick={menuClick}>{ section.name.toUpperCase() }</a></li>
                    ))}
                </ul>
            </div>
        </div> 
     );
}
 
export default MenuSection;