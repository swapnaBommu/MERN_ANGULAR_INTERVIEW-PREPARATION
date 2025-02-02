
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    setLoading(true);
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`);
      const data =await response.json();
      setProducts(data);
      setPage(page + 1);
    }catch(error){
      console.error('Error in fetching the products', error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchProducts();
  },[]);
 
  //mythrottle function
  const myThrottle = (cb, d) => {
      let last;
      return (...args)=>{
        let now = new Date().getTime();
        if( now - last < d )return;
        last = now;
        return cb(...args);
      };
  }

   //function to handle the scroll events
   const handleScroll = myThrottle(() =>{
    //document.documentElement.offsetHeight ===> It is height of the html page
    //window.innerHeight ===> height of the viewport simply height of the page which is visible to us
    //document.documentElement.scrollTop ===> height from the top to the point where the scroll is at present
    //the below condition is when height is 500px from the ground then hit the api call
    if(window.innerHeight + document.documentElement.scrollTop + 500 >  
      document.documentElement.offsetHeight && !loading &&
      products.limit < products.total){
        //api call should hit when the page height and viewport height is greater than the 
        //height of html page and it is not in loading state and products limit is less than products total
        fetchProducts();
      }
  },500)
  //adding event listener to the window object
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[handleScroll]);

  const {products:Allproducts} = products;

  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>
      {Allproducts?.map((prod)=>{
        return(
          <div className='products__single' key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title}/>
            <span>{prod.title}</span>
          </div>
        )
      })}
      {loading  && <h1>Loading...</h1>}
    </div>
    
  );
}

export default App;


