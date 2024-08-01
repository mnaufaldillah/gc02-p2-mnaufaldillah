import PropTypes from "prop-types";
import axios from "../../config/axiosinstance";
import { useState } from "react";

function SelectSortPublic({ setProducts }) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    async function handlerSortAsc() {
        try {
            setLoading(true);

            const { data } = await axios({
                url: `pub/products?createdAt=ASC`,
                method: 'GET'
            })

            setProducts(data.products);
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(errors);
        } finally {
            setLoading(false);
        }
    }

    async function handlerSortDesc() {
        try {
            setLoading(true);

            const { data } = await axios({
                url: `pub/products?createdAt=DESC`,
                method: 'GET'
            })

            setProducts(data.products);
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(errors);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="row p-3">
            <div className="col-2">
                Diurut dari:
            </div>
            <div className="col-2">
                <button onClick={handlerSortAsc} className="btn btn-dark btn-sm">Bawah ke Atas</button>
            </div>
            <div className="col-2">
                <button onClick={handlerSortDesc} className="btn btn-dark btn-sm">Atas ke Bawah</button>
            </div>
        </div>
    )
}

SelectSortPublic.propTypes = {
    dataCategories: PropTypes.array,
    setProducts: PropTypes.func
}

export default SelectSortPublic;