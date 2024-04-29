import { useState } from "react";

const Buttons = ({ score }) => {

    const [likes, setLikes] = useState(score);

    const handlePlusLikes = () => {
        setLikes(likes + 1)
    }

    const handleMinusLikes = () => {
        if(likes === 0) return;
        setLikes(likes - 1)
    }

    return (
        <div className='flex bg-lightGray rounded-md w-min md:flex-col md:h-28 mt-6'>
                <button 
                className='text-lg grow font-500 text-lightGrayishBlue w-full text-center px-3.5 py-2 md:h-8'
                onClick={ handlePlusLikes }
                >+</button>
                <span 
                className= 'text-lg grow text-center text-moderateBlue/90 font-500 w-full px-3.5 py-2 md:h-8'
                >{likes}</span>
                <button 
                className='text-lg grow font-500 text-lightGrayishBlue w-full px-3.5 py-2 md:h-8'
                onClick={ handleMinusLikes }
                >-</button>
        </div>
    )
}

export default Buttons;