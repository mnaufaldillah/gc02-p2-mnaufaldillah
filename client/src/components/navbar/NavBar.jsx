import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    function handlerLogout() {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary formula1-regular">
            <div className="container-fluid">
                <Link to='/admin/products' className="navbar-brand">
                    ICMS
                </Link>
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
                            <Link to='/admin/products' className="nav-link active">
                                Produk
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/products/create' className="nav-link">
                                Buat Produk Baru
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/add-user' className="nav-link">
                                Kategori
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handlerLogout} className="nav-link">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;