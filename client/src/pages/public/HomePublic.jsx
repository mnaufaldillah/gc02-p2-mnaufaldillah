// import { useState } from "react";
import Header from "../../components/header/Header";
import SideBarPublic from "../../components/navbar/SideBarPublic";
import SelectSortPublic from "../../components/select/SelectSortPublic";
import CardProduct from "../../components/card/CardProduct";
import { useEffect, useState } from "react";
import axios from "../../config/axiosinstance";
import PaginationPublic from "../../components/pagination/PaginationPublic";
import Swal from "sweetalert2";

function HomePublic() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    async function fetchPublicProducts() {
        try {
            setLoading(true);

            const { data } = await axios({
                url: '/pub/products',
                method: 'GET',
            });
            // console.log(data.products);
            setProducts(data.products);
            setPage(data.page);
            setTotalPage(data.totalPage);
        } catch (error) {
            setErrors(error.response.data.message);
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

    async function fetchPublicCategories() {
        try {
            setLoading(true);

            const { data } = await axios({
                url: '/pub/categories',
                method: 'GET',
            });
            // console.log(data);
            setCategories(data);
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

    // console.log(products, `<--------`);

    useEffect(() => {
        fetchPublicProducts();
        fetchPublicCategories();
        // console.log('Public Product Mounted');
    }, [])

    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            <div className="container">
                <Header title={`Icon Laptop`} />

                <div className="mb-3 p-3 row d-flex justify-content-between formula1-regular">
                    <div className="col-3">
                        <SideBarPublic dataCategories={categories} setProducts={setProducts} />
                    </div>
                    
                    <div className="col-9">
                        <SelectSortPublic setProducts={setProducts} />

                        <div className="row p-3">
                            {products.map((item) => {
                                return (
                                    <CardProduct dataDetail={item} key={item.id}/>
                                )
                            })}
                        </div>

                        <div className="p-3 d-flex justify-content-center">
                            <PaginationPublic setProducts={setProducts} page={page} setPage={setPage} totalPage={totalPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePublic;