import FormLogin from "../../components/form/FormLogin";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";

function LoginAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Selamat Datang di Icon Laptop Store CMS`} />

                <FormLogin />
            </div>
        </div>
    )
}

export default LoginAdmin;