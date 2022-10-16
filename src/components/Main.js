import React, { lazy, Suspense } from 'react'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';
// import Addproduct from './Addproduct';
// import Viewproducts from './Viewproducts';
// import Edit from './Edit';

const Viewproducts = React.lazy(() => import('./Viewproducts'));
const Addproduct = React.lazy(() => import('./Addproduct'));
const Edit = React.lazy(() => import('./Edit'));

export default function Main() {
    return (
        <>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}

                <section className="content">
                    <Suspense fallback={<h1>Loading</h1>} >
                        <Routes>
                            <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
                            <Route path='/viewproduct/*' element={<Viewproducts></Viewproducts>}></Route>
                            <Route path='/updateproduct/:id' element={<Edit></Edit>}></Route>
                        </Routes>
                    </Suspense>


                </section>
                {/* /.content */}
            </div>
            <Footer></Footer>
        </>


    )
}
