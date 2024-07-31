import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import TableProduct from "../../components/table/TableProduct";
import { Link } from "react-router-dom";

function HomeAdmin() {
    return (
        <div className="bg-body-secondary"  style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Daftar Produk`} />

                <div className="mb-3 formula1-regular">
                    <Link to='create'>
                        <Button commandType={'AddProduct'} />
                    </Link>
                </div>

                <TableProduct />
            </div>
        </div>
    )
}

export default HomeAdmin;