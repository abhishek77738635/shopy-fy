import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router'
import { addToCart } from './redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProList() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state);

    console.log(cart,"cart");
    
    var componentMounted = true;

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true); 
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
       setLoading(false);

       return () => {
        componentMounted = false;
      }
      
      }
    
      getProduct();
    }, []);
    
    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    } 

 
    const Show = () => {   
        const handleAddToCart = (data) => {
            toast.success("Item added successfully !", {
                position: "top-right"
              });
        dispatch(addToCart(data));
      };

        return(
            <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} heigh='400px' width='400px'/>
            </div>
            <div className='col-md-6'>
                <h4 className='test-uppercase test-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'> {product.title} </h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <buttton className="btn btn-outline-dark" onClick={() => handleAddToCart(product)}> Add to cart</buttton>
            </div>
            </>
        );
    }

  return (
    <div>
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading/> : <Show/>}
            </div>
        </div>
        <ToastContainer />

    </div>
  )
}
