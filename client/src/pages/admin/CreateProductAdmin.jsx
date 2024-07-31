import FormProduct from "../../components/form/FormProduct";
import Header from "../../components/header/Header";


function CreateProductAdmin() {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Buat Produk Baru`} />

                <FormProduct />
            </div>
        </div>
    )
}

export default CreateProductAdmin;