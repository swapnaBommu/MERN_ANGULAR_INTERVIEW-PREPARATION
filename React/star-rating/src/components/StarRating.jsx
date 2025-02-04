import React, { useState } from 'react'

const StarRating = ({size=5,onChange=()=>{},rating}) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const handleStarHover=(hoveredRating)=>{
        setHoveredRating(hoveredRating)
    }
  return (
    <div className='star-rating'>
        {Array(size).fill("").map((_,index) => {
            let starClass = "star";
            const starValue = index + 1;

            if(hoveredRating >= starValue){
                starClass += " hover";
            }else if(rating >= starValue){
                starClass += " active";
            }
            return <span 
                key={index} 
                className={starClass}
                onClick={()=>onChange(starValue)}
                onMouseEnter={()=>handleStarHover(starValue)}
                onMouseLeave={()=>handleStarHover(0)}
                
            >
                &#9733;
            </span>
        })}
    </div>
  )
}

export default StarRating