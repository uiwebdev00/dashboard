import React, { Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGetFetch from '../useGetFetch'
import usePostfetch from '../usePostfetch'

const Viewproducts = React.lazy(() => import('./Viewproducts'));
const Edit = React.lazy(() => import('./Edit'));



export default function Addproduct() {
    let navigate=useNavigate()
    let Post=usePostfetch
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    const{data,error,isPending}=useGetFetch('http://localhost:8000/categories')

    const handleSubmit =(e)=>{
        e.preventDefault(); 
        let product ={title,price,description,image,category}
        // Post('http://localhost:8000/products',JSON.stringify(product))
        // usePost('http://localhost:8000/products',JSON.stringify(product))
        // console.log(Post)
        fetch('http://localhost:8000/users',
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(product)
      
            }
          )
            .then((res) => {
                console.log(res)
               
                navigate('/dashboard/viewproduct')
                
            })
            .catch((error) => {
                console.log(error)
            })
            
    }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
              <div className="col-md-12">
                  <div className="card card-primary">
                      <div className="card-header">
                          <h3 className="card-title">Add Product</h3>
                      </div>
                      {/* /.card-header */}
                      {/* form start */}
                      <form onSubmit={(e)=>{handleSubmit(e)}}>
                          <div className="card-body">
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Product Title</label>
                                  <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{settitle(e.target.value)}} placeholder="" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Product Price
                                  </label>
                                  <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setprice(e.target.value)}} placeholder="" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Product description
                                 </label>
                                  <textarea type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setdescription(e.target.value)}} placeholder="" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Product  category
                                 </label>
                                 <select className='form-control' name="" id="" onChange={(e)=>{setcategory(e.target.value)}}>
                                 <option>Select category</option>
                                    {data && data.map((category)=>(
                                        
                                        <option value={category}>{category}</option>
                                    ))}
                                 </select>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Product  image</label>
                                  <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setimage(e.target.value)}} placeholder="" />
                              </div>
                        
                           
                          </div>
                          {/* /.card-body */}
                          <div className="card-footer">
                              <button type="submit"  className="btn btn-primary">Add Product</button>
                          </div>
                      </form>
                  </div>
              </div>

        </div>
    </div>
    
        <Viewproducts></Viewproducts>
    
 
    
    </>
    
  )
}
