import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import HomePublic from './pages/public/HomePublic.jsx';
// import ProductDetail from './pages/public/ProductDetail.jsx';
// import LoginAdmin from './pages/admin/LoginAdmin.jsx';
// import UploadImageAdmin from './pages/admin/UploadImageAdmin.jsx';

import './style.css'
import './john-lewis-style.css'

import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx'

// import CreateUserAdmin from './pages/admin/CreateUserAdmin.jsx';
// import CreateProductAdmin from './pages/admin/CreateProductAdmin.jsx';
// import EditProductAdmin from './pages/admin/EditProductAdmin.jsx';
// import CategoryListAdmin from './pages/admin/CategoryListAdmin.jsx';
// import HomeAdmin from './pages/admin/HomeAdmin.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePublic /> */}
    {/* <ProductDetail /> */}
    {/* <LoginAdmin /> */}
    {/* <UploadImageAdmin /> */}
    {/* <CreateUserAdmin /> */}
    {/* <CreateProductAdmin /> */}
    {/* <CategoryListAdmin /> */}
    {/* <HomeAdmin /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
