import { useState } from "react";
import axios from "../../config/axiosinstance";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handlerLogin(event) {
        try {
            event.preventDefault();
            setLoading(true);

            const { data } = await axios({
                url: '/login',
                method: 'POST',
                data: {
                    email, 
                    password
                }
            })

            // console.log(data.access_token);

            localStorage.setItem('access_token', data.access_token);
            navigate('/admin/products');
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
            <div className="mb-3 p-3 rounded formula1-regular w-25 bg-light-subtle">
                <form onSubmit={handlerLogin}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control" 
                        defaultValue={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control" 
                        defaultValue={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-dark">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default FormLogin;