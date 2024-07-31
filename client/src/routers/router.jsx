import { createBrowserRouter, redirect } from 'react-router-dom';
import HomePublic from '../pages/public/HomePublic';
import ProductDetail from '../pages/public/ProductDetail';
import LoginAdmin from '../pages/admin/LoginAdmin';
import HomeAdmin from '../pages/admin/HomeAdmin';
import EditProductAdmin from '../pages/admin/EditProductAdmin';
import CreateProductAdmin from '../pages/admin/CreateProductAdmin';
import UploadImageAdmin from '../pages/admin/UploadImageAdmin';
import CategoryListAdmin from '../pages/admin/CategoryListAdmin';
import CreateUserAdmin from '../pages/admin/CreateUserAdmin';
import MainLayout from '../pages/admin/MainLayout';
import PublicLayout from '../pages/public/PublicLayout';

const router = createBrowserRouter ([
    {
        path: '/pub',
        element: <PublicLayout />,
        children: [
            {
                path: 'products',
                element: <HomePublic />
            },
            {
                path: 'products/:id',
                element: <ProductDetail />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginAdmin />,
        loader: () => {
            if(localStorage.access_token) {
                return redirect('/admin/products');
            }

            return null;
        }
    },
    {
        path: '/admin',
        element: <MainLayout />,
        loader: () => {
            if(!localStorage.access_token) {
                return redirect('/login');
            }

            return null
        },
        children: [
            {
                path: 'products',
                element: <HomeAdmin />
            },
            {
                path: 'products/create',
                element: <CreateProductAdmin />
            },
            {
                path: 'produtcs/:id/edit',
                element: <EditProductAdmin />
            },
            {
                path: 'products/:id/upload-image',
                element: <UploadImageAdmin />
            },
            {
                path: 'categories',
                element: <CategoryListAdmin />
            },
            {
                path: 'add-user',
                element: <CreateUserAdmin />
            }
        ]
    }
])

export default router;