import { useState } from "react";
import axios from "../../config/axiosinstance";
import { useNavigate } from "react-router-dom";

function FormUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handlerUser(event) {
        try {
            event.preventDefault();
            setLoading(true)

            const { data } = await axios({
                url: '/add-user',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                },
                data: {
                    username,
                    email, 
                    password,
                    phoneNumber,
                    address
                }
            })

            // console.log(data.access_token);
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
            <div className="mb-3 formula1-regular w-50 bg-light-subtle">
                <form onSubmit={handlerUser}>
                    <div className="mb-3">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            defaultValue={username} 
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="phoneNumber">Nomor Telepon</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="form-control"
                            defaultValue={phoneNumber} 
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Alamat</label>
                        <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        className="form-control" 
                        defaultValue={address} 
                        onChange={(event) => setAddress(event.target.value)}
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

export default FormUser;