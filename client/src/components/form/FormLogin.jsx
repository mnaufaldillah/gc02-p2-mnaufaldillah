import { useState } from "react";
import axios from "../../config/axiosinstance";
import PropTypes from 'prop-types';

function FormLogin({ setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handlerLogin(event) {
        event.preventDefault();

        console.log(email, password);

        const { data } = await axios({
            url: '/login',
            method: 'POST',
            data: {
                email, 
                password
            }
        })

        localStorage.setItem('access_token', data.acces_token);
        setPage('home');
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

FormLogin.propTypes = {
    setPage: PropTypes.func,
}


export default FormLogin;