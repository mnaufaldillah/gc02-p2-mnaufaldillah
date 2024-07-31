import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";


function EditProductAdmin() {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Edit Produk`} />

                <FormProduct />
            </div>
        </div>
    )
}

export default EditProductAdmin;