// import { useState } from "react";
import Header from "../../components/header/Header";
import CardProductDetail from "../../components/card/CardProductDetail";
import { useEffect, useState } from "react";
import axios from "../../config/axiosinstance";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchPublicProductById() {
        try {
            setLoading(true);

            // console.log(id, `<-------------`);

            const { data } = await axios({
                url: `/pub/products/${id}`,
                method: 'GET',
            });
            console.log(data);
            setProduct(data);
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);

            Swal.fire({
                title: 'Error.',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Lanjut'
            });

            navigate('/pub/products');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPublicProductById()
    }, [])

    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            <div className="container">
                <Header title={`Icon Laptop`} />

                <CardProductDetail dataDetail={product}/>
            </div>
        </div>
    )
}

export default ProductDetail;