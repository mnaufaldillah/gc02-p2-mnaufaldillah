import FormLogin from "../../components/form/FormLogin";
import Header from "../../components/header/Header";
import PropTypes from 'prop-types';

function LoginAdmin({ setPage }) {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            <div className="container">
                <Header title={`Selamat Datang di Icon Laptop Store CMS`} />

                <FormLogin setPage={setPage} />
            </div>
        </div>
    )
}

LoginAdmin.propTypes = {
    setPage: PropTypes.func,
}

export default LoginAdmin;