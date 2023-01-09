

import React,{useState,useEffect}  from 'react'
import {NavLink} from 'react-router-dom'
import Filter from './filter'

import {Link} from 'react-router-dom'


export default function Card() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    var componentMounted = true;

    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if(componentMounted){
            setData(await response.clone().json());
            setFilter( await response.json());
            setLoading(false);
        } 
        return () => {
        componentMounted = false;
      }
      }

     

      getProducts();

    }, []);
    
  const Loading = () => {
    return(
        <>
        Loading...
        </>
    );
  }

  const filterProduct = (cat) => {
   const updatedList = data.filter((x) => x.category === cat);
   setFilter(updatedList);
  };

  const ShowProducts = () =>{
    return(
    <>
        <div className='buttons d-flex justify-content-center' >
            <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>men's</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>women's</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>jewelery</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("electronics")}>electronics</button>
        </div>

        {filter.map((product) => {
            return(
                <>
             <Link to={`/products/${product.id}`} className='col-md-3 mb-3' style={{textDecoration:0}} >  <div style={{marginTop:'15px'}}>
                <div className="card h-70 text-center p-4" key={product.id}>
                    <img className="card-img-top" src={product.image} alt={product.title} height='250px'/>
                        <div className="card-body">
                            <h5 className="card-title m-0">{product.title.substring(0,12)}</h5>
                            <p className="card-text lead fw-bold"> ${product.price}</p>
                           <NavLink to={`/products/${product.id}`} stylr={{marginRight:'10px'}} className ="btn btn-outline-dark "> Buy Now  </NavLink>
                           <button style={{width:'2.8cm', height:'1cm' ,marginLeft:'10px'}} className ="btn btn-outline-dark">Add Cart</button>
                         </div>
                </div>
            </div>
          </Link>
                </>
            )
        })}
    </>
    );
  };
    

  return (
    <div>
        <div className='container my-5 py-5' style={{marginBottom:'-2px'}}>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'><Filter/></h1>
                    <hr/>
                </div>
            </div>
            <div className=' row justify-content-center ' style={{marginTop:'-1.4cm'}}>
              
                {loading ? <Loading/>: <ShowProducts/> }
        </div>
    </div>
    </div>
  )
}
