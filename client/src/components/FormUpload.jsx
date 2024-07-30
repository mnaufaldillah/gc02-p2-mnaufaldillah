function FormUpload() {
    return (
        <div className="d-flex justify-content-center">
            <div className="mb-3 p-3 rounded formula1-regular w-50 bg-light-subtle">
                <form action="" method="patch">
                    <div className="mb-3">
                        <label htmlFor="image">Upload Gambar</label>
                        <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control form-control-lg"
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-dark">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormUpload;