function FormLogin() {
    return (
        <div className="d-flex justify-content-center">
            <div className="mb-3 p-3 rounded formula1-regular w-25 bg-light-subtle">
                <form action="" method="post">
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

export default FormLogin;