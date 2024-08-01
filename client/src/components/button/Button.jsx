import PropTypes from 'prop-types';
import axios from "../../config/axiosinstance";
import { useState } from 'react';
function Button({commandType, productId, fetchProducts}) {
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function handlerDelete(event) {
        try {
            event.preventDefault();
            setLoading(true);

            // console.log(productId, `<-------------`);

            await axios({
                url: `/products/${productId}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            fetchProducts();
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);
        } finally {
            setLoading(false)
        }
    }

    if(commandType === `AddProduct`) {
        return (
            <button className="btn btn-dark">
                Buat Produk Baru
            </button>
        )
    }

    if(commandType === `EditProduct`) {
        return (
            <button className="btn btn-outline-info btn-sm">
                Edit
            </button>
        )
    }

    if(commandType === `UploadImage`) {
        return (
            <button className="btn btn-outline-primary btn-sm">
                Upload Gambar
            </button>
        )
    }

    if(commandType === `DeleteProduct`) {
        return (
            <button onClick={handlerDelete} className="btn btn-outline-danger btn-sm">
                Hapus
            </button>
        )
    }

    if(commandType === `DetailProduct`) {
        return (
            <button className="btn btn-primary w-100">
                Detail
            </button>
        )
    }

    if(commandType === `ContactLarge`) {
        return (
            <button className="btn btn-outline-primary w-100">
                Hubungi Toko
            </button>
        )
    }

    if(commandType === `ContactMedium`) {
        return (
            <button className="btn btn-outline-primary">
                Hubungi Toko
            </button>
        )
    }
}

Button.propTypes = {
    commandType: PropTypes.node,
    productId: PropTypes.node,
    fetchProducts: PropTypes.func
}

export default Button;