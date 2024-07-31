import FormUpload from "../../components/form/FormUpload";
import Header from "../../components/header/Header";


function UploadImageAdmin() {
    return (
        <div className="bg-body-secondary">
            <div className="container">
                <Header title={`Upload Gambar`} />

                <FormUpload />
            </div>
        </div>
    )
}

export default UploadImageAdmin;