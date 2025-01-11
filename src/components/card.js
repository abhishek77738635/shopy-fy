

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Filter from './filter'

import { Link } from 'react-router-dom'
import { addToCart } from './redux/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();



  var componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      }
    }



    getProducts();

  }, []);

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    );
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };



  const ShowProducts = () => {

    const storedEmail = localStorage.getItem('email');

   

    const handleAddToCart = (rd) => {
      if(!storedEmail){
        alert('You need to login first!')
      }else{
         toast.success("Item Added successfully !", {
         position: "top-right"
      });
      dispatch(addToCart(rd));
      }
     
    };
    return (
      <>
        <div className='buttons d-flex justify-content-center' >
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>men's</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>women's</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>jewelery</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>electronics</button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="card h-70 text-center p-4" key={product.id} style={{height:"30%",width:"30%"}}>
                <div style={{ marginTop: '15px' }}>
                <Link to={`/products/${product.id}`} className='col-md-3 mb-3' style={{ textDecoration: 0 }} >  
                  <img className="card-img-top" src={product.image} alt={product.title} height='250px' />
                </Link>
                <div className="card-body">
                  <h5 className="card-title m-0">{product.title.substring(0, 12)}</h5>
                  <p className="card-text lead fw-bold"> ${product.price}</p>
                  <NavLink hidden={!storedEmail} to={`/products/${product.id}`} stylr={{ marginRight: '10px' }} className="btn btn-outline-dark "> Buy Now  </NavLink>
                  <button style={{ width: '2.8cm', height: '1cm', marginLeft: '10px' }} className="btn btn-outline-dark" onClick={() => handleAddToCart(product)}>Add Cart</button>
                </div>
              </div>
            </div >
          </>
    )
  })
}
    </>
    );
  };


return (
  <div>
    <div className='container my-5 py-5' style={{ marginBottom: '-2px' }}>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'><Filter /></h1>
          <hr />
        </div>
      </div>
      <div className='row justify-content-center ' style={{ marginTop: '-1.4cm' ,display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    <ToastContainer />
  </div>
)
}
