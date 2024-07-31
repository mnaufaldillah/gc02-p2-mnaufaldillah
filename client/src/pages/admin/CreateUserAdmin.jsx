import FormUser from "../../components/form/FormUser";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";


function CreateUserAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Buat User Baru`} />

                <FormUser />
            </div>
        </div>
    )
}

export default CreateUserAdmin;