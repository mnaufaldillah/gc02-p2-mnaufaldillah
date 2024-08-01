import { useParams } from "react-router-dom";
import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";
import axios from "../../config/axiosinstance";
import { useEffect, useState } from "react";

function CreateProductAdmin() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

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

    useEffect(() => {
        fetchCategories();
        // console.log('Public Product Mounted');
    }, []);

    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Buat Produk Baru`} />

                <FormProduct dataCategories={categories} commandType={'create'}/>
            </div>
        </div>
    )
}

export default CreateProductAdmin;