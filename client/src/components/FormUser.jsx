function FormUser() {
    return (
        <div className="mb-3 formula1-regular w-50">
            <form action="" method="post">
                <div className="mb-3">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber">Nomor Telepon</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Alamat</label>
                    <input type="text" name="address" id="address" className="form-control" />
                </div>
                <div className="mb-3 text-center">
                <button type="submit" className="btn btn-dark">
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default FormUser;