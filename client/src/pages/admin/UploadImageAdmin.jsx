import { useParams } from "react-router-dom";
import FormUpload from "../../components/form/FormUpload";
import Header from "../../components/header/Header";


function UploadImageAdmin() {
    const { id } = useParams();

    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            <div className="container">
                <Header title={`Upload Gambar`} />

                <FormUpload productId={id}/>
            </div>
        </div>
    )
}

export default UploadImageAdmin;