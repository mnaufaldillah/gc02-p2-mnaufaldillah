import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";


function EditProductAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Edit Produk`} />

                <FormProduct />
            </div>
        </div>
    )
}

export default EditProductAdmin;