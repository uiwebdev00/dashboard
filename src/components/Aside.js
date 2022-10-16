import React, { Suspense } from 'react'
import { Link, Route, Routes } from "react-router-dom";
// import Main from './Main';
import Nav from './Nav';
const Main = React.lazy(() => import('./Main'));
export default function Aside() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="#" className="brand-link">
                    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">React DashBoard</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar h-auto">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}


                            <li className="nav-header">Category</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Add Category
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                        View Category
                                    </p>
                                </a>
                            </li>


                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}


                            <li className="nav-header">Products</li>
                            <li className="nav-item">
                                <Link to="/dashboard/addproduct" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Add Product
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/viewproduct" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                        View Products
                                    </p>
                                </Link>
                            </li>


                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}


                            <li className="nav-header">Users</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Add User
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                        View Users
                                    </p>
                                </a>
                            </li>


                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
            <Nav></Nav>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>

                    <Route path='dashboard/*' element={<Main></Main>}></Route>
                </Routes>
            </Suspense>
        </>
    )
}
