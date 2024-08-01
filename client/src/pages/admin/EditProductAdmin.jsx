import { useParams } from "react-router-dom";
import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";
import axios from "../../config/axiosinstance";
import { useEffect, useState } from "react";

function EditProductAdmin() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const { id } = useParams();

    async function fetchProductById() {
        try {
            setLoading(true);

            const {data} = await axios({
                url: `/products/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            });;

            // console.log(data);
            setProduct(data)
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);
        } finally {
            setLoading(false);
        }
    }

    async function fetchCategories() {
        try {
            setLoading(true);

            const {data} = await axios({
                url: '/categories',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            });

            // console.log(data);
            setCategories(data)
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);
        } finally {
            setLoading(false);
        }
    }

    // console.log(product);

    useEffect(() => {
        fetchProductById();
        fetchCategories();
        // console.log('Public Product Mounted');
    }, []);

    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Edit Produk`} />

                <FormProduct dataEditProduct={product} dataCategories={categories} commandType={'edit'}/>
            </div>
        </div>
    )
}

export default EditProductAdmin;