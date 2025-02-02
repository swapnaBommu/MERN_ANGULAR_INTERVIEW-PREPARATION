import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({
  images = [],
  isLoading = false,
  imagePerSlide = 2,
  imageLimit = images.length,
}) => {
  const imgRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
   
  useEffect(()=>{
      if(images.length > 0){
        setCurrentIndex(0);
      }
  },[images])

  const goToPrev = ()=>{
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length -1 : prevIndex - 1);
    
  }
  const goToNext = () => {
    setCurrentIndex(prevIndex => prevIndex === images.length -1? 0 : prevIndex + 1);
    
  }

  return isLoading? (<div>Loading...</div>) : ( 
    <div className='carousel'
      style={{width:imagePerSlide * imgWidth}}
    >
    <div className='image-container'
      style={{transform:`translateX(-${currentIndex * imgWidth}px)`}}
    >
      {images.slice(0, imageLimit > images.length ? images.length : imageLimit)
      .map((image,index)=>{
          return <img
          onLoad={()=>setImgWidth(imgRef?.current?.offsetWidth)}
          ref = {imgRef}
           key={image.id}
           src={image.url}
           alt={image.title}
           className='image' 
          />
      })}
       
    </div>
    <button className='btn prev' onClick={goToPrev}>Prev</button>
    <button className='btn next' onClick={goToNext}>Next</button>

  </div>)
}

export default Carousel