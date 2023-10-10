import React, {useState} from 'react'
import { IconPlayerPlayFilled, IconStarFilled  } from '@tabler/icons-react';


function MovieItem({ poster_path, title, overview, id, vote_average, onDetail }) {
    const [isHovered, setIsHovered] = useState(false);

    const backgroundImageUrl = `url(${poster_path})`;
    const styleImage = {
      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200px',
    };

  
    return (
      <div className='relative'>
        <div style={styleImage} className='flex items-end justify-center rounded-xl'
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)} 
           >
           
        <div className='relative flex flex-col justify-center text-center z-10 text-white'>
            <button onClick={() => onDetail(id)} className={`${isHovered == true ? 'block' : 'hidden'} transition ease-in-out delay-50 z-10 inline-flex items-center w-20 m-auto bg-green-500 rounded p-1 text-sm font-semibold mb-2`} ><IconPlayerPlayFilled /> Detail</button>
            <h1 className='text-sm z-10  font-bold'>{title}</h1>
            <p className='text-sm z-10  mb-2'>{overview}</p>
            <h1 className='text-xs inline-flex justify-center items-center text-yellow-500 font-semibold'><IconStarFilled className='w-3'/>{vote_average}</h1>
          </div>
        </div>
        <div className="absolute transition ease-in-out delay-50 inset-0 bg-black opacity-50 hover:opacity-60 easy-in rounded-xl"
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)} >
        </div>
        
      </div>
    );
  }

export default MovieItem