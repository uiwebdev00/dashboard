import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetFetch from '../useGetFetch'

export default function Edit() {
    
    let { id } = useParams()
    const { data, error, isPending } = useGetFetch('http://localhost:8000/categories')
    const { data: product, error: errorProduct, isPending: productispending } = useGetFetch(`http://localhost:8000/products/${id}`)
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        let updProduct = { title, price, description, image, category }
      

        fetch(`http://localhost:8000/products/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updProduct)

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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Update Product</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        {product && <form onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Product Title</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={product.title} onChange={(e) => { settitle(e.target.value) }} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Product Price
                                    </label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={product.price} onChange={(e) => { setprice(e.target.value) }} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Product description
                                    </label>
                                    <textarea type="text" className="form-control" id="exampleInputPassword1" defaultValue={product.description} onChange={(e) => { setdescription(e.target.value) }} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Product  category
                                    </label>
                                    <select className='form-control' name="" id="" defaultValue={product.category} onChange={(e) => { setcategory(e.target.value) }}>
                                        <option>Select category</option>
                                        {data && data.map((category) => (

                                            <option value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Product  image</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={product.image} onChange={(e) => { setimage(e.target.value) }} placeholder="" />
                                </div>


                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Upadte Product</button>
                            </div>
                        </form>}
                    </div>
                </div>

            </div>
        </div>
    )
}
