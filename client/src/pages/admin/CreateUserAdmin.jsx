import FormUser from "../../components/form/FormUser";
import Header from "../../components/header/Header";


function CreateUserAdmin() {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Buat User Baru`} />

                <FormUser />
            </div>
        </div>
    )
}

export default CreateUserAdmin;