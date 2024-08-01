import FormLogin from "../../components/form/FormLogin";
import Header from "../../components/header/Header";

function LoginAdmin() {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            <div className="container">
                <Header title={`Selamat Datang di Icon Laptop Store CMS`} />

                <FormLogin />
            </div>
        </div>
    )
}


export default LoginAdmin;