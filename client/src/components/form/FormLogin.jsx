import { useState } from "react";
import axios from "../../config/axiosinstance";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handlerLogin(event) {
        try {
            event.preventDefault();

            const { data } = await axios({
                url: '/login',
                method: 'POST',
                data: {
                    email, 
                    password
                }
            })

            console.log(data.acces_token);

            localStorage.setItem('access_token', data.acces_token);
            navigate('/admin/products')
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
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