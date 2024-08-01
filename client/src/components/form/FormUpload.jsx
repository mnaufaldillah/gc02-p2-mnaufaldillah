import { useState } from "react";
import axios from "../../config/axiosinstance";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function FormUpload({productId}) {
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handlerUpload(event) {
        try {
            event.preventDefault();
            setLoading(true);

            const dataUpload = new FormData();
            dataUpload.append('image', image);
            const { data } = await axios({
                url: `/products/${productId}/upload-image`,
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                },
                data: dataUpload
            })

            navigate('/admin/products')
        } catch (error) {
            setErrors(error.response.data.message)
            console.log(errors);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="mb-3 p-3 rounded formula1-regular w-50 bg-light-subtle">
                <form onSubmit={handlerUpload}>
                    <div className="mb-3">
                        <label htmlFor="image">Upload Gambar</label>
                        <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control form-control-lg" 
                        accept="image/*" 
                        onChange={(event) => setImage(event.target.files[0])}
                        />
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

FormUpload.propTypes = {
    productId: PropTypes.node
}

export default FormUpload;