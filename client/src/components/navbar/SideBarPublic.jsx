import PropTypes from 'prop-types';
import { useState } from "react";
import axios from "../../config/axiosinstance";
import Swal from "sweetalert2";

function SideBarPublic({ dataCategories, setProducts,  }) {
    const [search, setSearch] = useState('')
    const [categoryId, setCategoryId] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    async function handlerSearch(event) {
        try {
            event.preventDefault();
            setLoading(true);

            const { data } = await axios({
                url: `/pub/products?search=${search}`,
                method: 'GET'
            });

            setProducts(data.products);
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
            setLoading(false)
        }
    }

    async function handlerFilter(event) {
        try {
            event.preventDefault();
            setLoading(true);

            const { data } = await axios({
                url: `/pub/products?categoryId=${categoryId}`,
                method: 'GET'
            });

            setProducts(data.products);
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
            setLoading(false)
        }
    }

    return (
        <div className="p-3 bg-light">
            <div className="p-3">
                <form onSubmit={handlerSearch}>
                    <div className="p-1">
                        <label htmlFor="search">Search</label>
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            className="form-control form-control-sm" 
                            defaultValue={search} 
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                    <div className="p-1">
                        <button type="submit" className="btn btn-dark btn-sm">Search</button>
                    </div>
                </form>
            </div>
            <div className="p-3">
                <form onSubmit={handlerFilter}>
                    <div className="p-1">
                        <label htmlFor="categoryId">Kategori Laptop</label>
                        <select 
                            name="categoryId" 
                            id="categoryId" 
                            className="form-select"
                            value={categoryId} 
                            onChange={(event) => setCategoryId(event.target.value)}
                        >
                            {dataCategories.map((item) => {
                                return (
                                    <option  key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="p-1">
                        <button type="submit" className="btn btn-dark btn-sm">Filter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

SideBarPublic.propTypes = {
    dataCategories: PropTypes.array,
    setProducts: PropTypes.func
}

export default SideBarPublic;