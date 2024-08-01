import Header from "../../components/header/Header";
import TableCategory from "../../components/table/TableCategory";
import axios from "../../config/axiosinstance";
import { useEffect, useState } from "react";

function CategoryListAdmin() {
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
                <Header title={`Daftar Kategori`} />

                <TableCategory dataCategories={categories} />
            </div>
        </div>
    )
}

export default CategoryListAdmin;