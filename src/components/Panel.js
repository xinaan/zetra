import { Link } from 'react-router-dom';

const Panel = ({id, name, url, type}) => {
    
    return (
        
        <section key={ id }>
            <Link to={ '/' + type +'/' + id} key={ id }>
                <div className='text-left mb-3 block relative h-32 rounded-lg drop-shadow'>
                    <img src={ url && url} alt={ name } className= 'rounded-md h-full w-full object-cover absolute'/>
                    <span className='relative flex justify-left  h-full items-end'><h1 className='bg-white bg-opacity-80 w-full text-base text-cyan-900 pb-1 pt-1 px-3 font-medium overflow-hidden rounded-b-md backdrop-blur'>{ name }</h1></span>
                </div>
            </Link>
        </section>
    );
}
 
export default Panel;