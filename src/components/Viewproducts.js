import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useGetFetch from '../useGetFetch'
import Edit from './Edit'

export default function Viewproducts() {
   
    const [first, setfirst] = useState('')
    const{data,error,isPending}=useGetFetch('http://localhost:8000/products',first)
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:8000/products/${id}`, { method: 'DELETE' })
          .then((res) => {
            setfirst(id)
          })
          .catch(() => {

          })
    
      }
  
  
  
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header">
                          <h3 className="card-title">Products</h3>
                          <div className="card-tools">
                              <div className="input-group input-group-sm" style={{ width: 150 }}>
                                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                  <div className="input-group-append">
                                      <button type="submit" className="btn btn-default">
                                          <i className="fas fa-search" />
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body table-responsive p-0">
                          <table className="table table-hover">
                              <thead>
                                  <tr>
                                  <th>ID</th>
                                  <th>Title</th>
                                  <th>Price</th>
                                  <th>Category</th>
                                  <th>Image</th>
                                  <th>Description</th>
                                  <th></th>
                                  <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                data &&data.map((product)=>( 
                                        <tr>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>{product.category}</td>
                                            <td> <a href={product.image} target="blank">View Image</a>   </td>
                                            <td style={{width:'25%'}}>{product.description}</td>
                                            <td><Link className='btn btn-primary' to={`dashboard/updateproduct/${product.id}`}>Edit</Link></td>
                                            <td><button className='btn btn-danger' onClick={() => { handleDelete(product.id) }}>Delete</button></td>
                                        
                                        </tr>
                                    ))
                              }
                                 
                                 {error && <h1>{error}</h1>}
                                 {isPending && <h1>pending...</h1>}
                              </tbody>
                          </table>
                      </div>
                      {/* /.card-body */}
                  </div>
                  {/* /.card */}
              </div>
          </div>
      </div>

  )
}
