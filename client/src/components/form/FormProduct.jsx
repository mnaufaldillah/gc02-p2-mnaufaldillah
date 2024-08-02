import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import axios from "../../config/axiosinstance";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormProduct({dataEditProduct, dataCategories, commandType}) {
    // const categories = [
    //     { id: 1, name: `Legendary Gaming Laptop` },
    //     { id: 2, name: `Iconic Gaming Laptop` },
    //     { id: 3, name: `Memorable Gaming Laptop` }
    // ]

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // console.log(dataEditProduct);

    useEffect(() => {
        if(dataEditProduct) {
            setName(dataEditProduct.name);
            setDescription(dataEditProduct.description);
            setPrice(dataEditProduct.price);
            setStock(dataEditProduct.stock);
            setCategoryId(dataEditProduct.categoryId);
        }
        // console.log('Public Product Mounted');
    }, [dataEditProduct]);

    async function handlerProduct(event) {
        try {
            event.preventDefault();
            setLoading(true);

            if(commandType === 'create') {
                await axios({
                    url: '/products',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`
                    },
                    data: {
                        name, 
                        description,
                        price,
                        stock,
                        categoryId
                    },

                })

                navigate('/admin/products')
            } else if(commandType === 'edit') {
                await axios({
                    url: `/products/${dataEditProduct.id}`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`
                    },
                    data: {
                        name, 
                        description,
                        price,
                        stock,
                        categoryId
                    }
                })

                navigate('/admin/products')
            }

            // console.log(data.access_token);

            navigate('/admin/products')
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

    return (
        <div className="d-flex justify-content-center">
            <div className="mb-3 wi formula1-regular w-50 bg-light-subtle">
                <form onSubmit={handlerProduct}>
                    <div className="mb-3">
                        <label htmlFor="name">Nama</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            defaultValue={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Deskripsi</label>
                        <textarea
                            name="description"
                            id="description"
                            cols={30}
                            rows={10}
                            className="form-control"
                            defaultValue={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price">Harga</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="form-control"
                            defaultValue={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock">Jumlah Stok</label>
                        <input
                            type="number"
                            name="stock"
                            id="stock"
                            className="form-control"
                            defaultValue={stock}
                            onChange={(event) => setStock(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryId">Kategori Laptop</label>
                        <select 
                            name="categoryId" 
                            id="categoryId" 
                            className="form-select" 
                            value={categoryId}
                            onChange={(event) => setCategoryId(event.target.value)}
                        >
                            {dataCategories.map((item)  => {
                                return (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

FormProduct.propTypes = {
    dataEditProduct: PropTypes.object,
    dataCategories: PropTypes.array,
    commandType: PropTypes.node
}

export default FormProduct;