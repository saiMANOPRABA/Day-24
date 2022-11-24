import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
//import Section from './components/Section';
import Footer from './components/Footer';
import {useState} from 'react';
import {Rating} from '@mui/material';

function App() {
  
let [cartValue,setcartValue]=useState(0)
let [toggle,setToggle]=useState(false)
let [toggle1,setToggle1]=useState(true)
let [toggle2,setToggle2]=useState(false)
let [toggle3,setToggle3]=useState(true)
let [toggle4,setToggle4]=useState(true)
let [toggle5,setToggle5]=useState(true)
let [toggle6,setToggle6]=useState(true)
let [toggle7,setToggle7]=useState(true)
  return<>
  <div>
    <Nav data={{cartValue:cartValue}}/>
    <Header/>
      {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                    toggle?<button className="btn btn-outline-dark mt-auto" onClick ={()=>{
                                        setcartValue(cartValue-1)
                                      setToggle((previous)=>!previous)
                                    }}>Remove</button>:
                                  
                                    <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                        setcartValue(cartValue+1)
                                        setToggle((previous)=>!previous)
                                    }}>Add to Cart</button>
                                  }
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Rating/>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                toggle1?<button className="btn btn-outline-dark mt-auto" onClick ={()=>{
                                        setcartValue(cartValue+1)
                                        setToggle1((prev)=>!prev)
                                    }}>Add to Cart</button>:
                                    <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                        setcartValue(cartValue-1)
                                        setToggle1((prev)=>!prev)
                                      }}>Remove</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle2?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                      setcartValue(cartValue-1)
                                      setToggle2((previous2)=>!previous2)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                    setcartValue(cartValue+1)
                                    setToggle2((previous2)=>!previous2)
                                  }} >Add to cart</button>
                                }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Rating/>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle3?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue+1)
                                  setToggle3((previous)=>!previous)
                                  }}>Add to cart</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue-1)
                                  setToggle3((prevoius)=>!prevoius)
                                  }}>Remove</button>
                                  
                                }</div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                  toggle4?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue+1)
                                  setToggle4((previous)=>!previous)
                                  }}>Add to cart</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue-1)
                                  setToggle4((prevoius)=>!prevoius)
                                  }}>Remove</button>
                                  
                                }</div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"> 
                                {
                                  toggle5?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue+1)
                                  setToggle5((previous)=>!previous)
                                  }}>Add to cart</button>:
                                  <butto className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue-1)
                                  setToggle5((prevoius)=>!prevoius)
                                  }}>Remove</butto>  
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Rating/>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                  toggle6?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue+1)
                                  setToggle6((previous)=>!previous)
                                  }}>Add to cart</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue-1)
                                  setToggle6((prevoius)=>!prevoius)
                                  }}>Remove</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Rating/>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                   {
                                  toggle7?<button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue+1)
                                  setToggle7((previous)=>!previous)
                                  }}>Add to cart</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick = {()=>{
                                  setcartValue(cartValue-1)
                                  setToggle7((prevoius)=>!prevoius)
                                  }}>Remove</button> 
                                }
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
    </div>
    </section>
    <Footer/>
  </div>
  </>
  
}

export default App;
