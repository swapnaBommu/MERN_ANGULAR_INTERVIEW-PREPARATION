// Pagination with Truncation - React JS
// Implement a Button Based Pagination with Truncation functionality in React JS

import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=100&skip=${page * 10 - 10}`);
      const data =await response.json();

      if(data &&  data?.products){
          setProducts(data.products); 
          setTotalPages(data.total/10);
      }
    }catch(error){
      console.log("Error in fetching the products");
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[]);

  
  return (
    <div>
      {products.length > 0 && (
      <div className='products'> 
        {products.slice(page * 10 - 10, page * 10).map((prod)=>{
          return <span className='products__single' key={prod.id}>
            
          </span>;
        })}
      </div>
      )}
      {products.length > 0 && (
        <Pagination 
          products={products}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;