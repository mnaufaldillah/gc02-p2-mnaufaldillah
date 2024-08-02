import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import TableProduct from "../../components/table/TableProduct";
import { Link } from "react-router-dom";
import axios from "../../config/axiosinstance";
import Swal from "sweetalert2";

function HomeAdmin() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    async function fetchProducts() {
        try {
            setLoading(true);

            // console.log(localStorage);

            const { data } = await axios({
                url: '/products',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            });

            // console.log(data);
            setProducts(data);
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);

            Swal.fire({
                title: 'Error.',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Lanjut'
            });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
        // console.log('Public Product Mounted');
    }, []);

    return (
        <div className="bg-body-secondary"  style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Daftar Produk`} />

                <div className="mb-3 formula1-regular">
                    <Link to='create'>
                        <Button commandType={'AddProduct'} />
                    </Link>
                </div>

                <TableProduct dataProducts={products} fetchProducts={fetchProducts} />
            </div>
        </div>
    )
}

export default HomeAdmin;