import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, minusToCart } from '../components/redux/CartSlice';
import { Link, NavLink } from 'react-router-dom';
import FinalBill from './FinalBill';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log(cart, "here and now");



  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleMinus = (rd) => {
    dispatch(minusToCart(rd));
  };

  const handleAddToCart = (rd) => {
    dispatch(addToCart(rd));
  };




  return (
    <div style={{ width: "100%", height: "100%" ,textAlign:'center',backgroundColor:"white"}}>
      <h2 style={{ padding: "10px", marginTop: '50px' }}>Shopping Cart</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: "0.5rem" }} hidden={cart.length === 0}>
        {cart?.map((item) => (
          <ShowProducts product={item} handleAddToCart={handleAddToCart} handleMinus={handleMinus} handleClearCart={handleClearCart} handleRemoveFromCart={handleRemoveFromCart} />
        ))}
      </div>
      <div hidden={cart.length > 0} style={{display:'flex',alignItems:'center',justifyContent:"center",height:'100%',width:"100%",fontSize:"20px"}}>
        Cart has no items !
      </div>

      {/* <button onClick={handleAddToCart}>Add Item</button>
      <button onClick={handleClearCart}>Clear Cart</button> */}
      <div style={{height:'auto',backgroundColor:"white"}}>
              <FinalBill/>
      </div>

    </div>
  );
};


const ShowProducts = ({ product, handleRemoveFromCart, handleClearCart, handleMinus, handleAddToCart }) => {
  return (
    <>
      {/* <Link to={`/products/${product.id}`} className='col-md-3 mb-3' style={{textDecoration:0}} >  <div style={{marginTop:'15px'}}> */}
      <div className="card h-70 text-center p-4" key={product.id} style={{ height: "20%", width: "20%" }}>
        <img className="card-img-top" src={product.image} alt={product.title} height='250px' />
        <div className="card-body">
          <h5 className="card-title m-0">{product.title.substring(0, 12)}</h5>
          <p className="card-text lead fw-bold"> ${product.price}</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <button style={{ display: "flex", width: "30px", backgroundColor: "blue", color: "white", height: "30px", alignItems: "center", justifyContent: "center", borderRadius: "4px" }} onClick={() => handleMinus(product)}> - </button><div style={{ color: "black", backgroundColor: "white", width: "30px", height: "30px", }}>{product.quantity}</div><button style={{ display: "flex", width: "30px", backgroundColor: "grey", color: "white", height: "30px", alignItems: "center", justifyContent: "center", borderRadius: "4px" }} onClick={() => handleAddToCart(product)}>+</button>
          </div>{/* <NavLink to={`/products/${product.id}`} stylr={{marginRight:'10px'}} className ="btn btn-outline-dark "> Buy Now  </NavLink> */}
          <button style={{ width: '2.8cm', height: '1cm', marginLeft: '10px', marginTop: "10px" }} className="btn btn-outline-dark" onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
        </div>

      </div>
      {/* </Link> */}
    </>
  );
};

export default Cart;
