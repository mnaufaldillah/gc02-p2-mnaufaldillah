function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary formula1-regular">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    ICMS
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Produk
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Buat Produk Baru
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Kategori
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;