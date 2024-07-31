import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";


function CreateProductAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Buat Produk Baru`} />

                <FormProduct />
            </div>
        </div>
    )
}

export default CreateProductAdmin;