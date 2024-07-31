import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import TableProduct from "../../components/table/TableProduct";

function HomeAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Daftar Produk`} />

                <div className="mb-3 formula1-regular">
                    <a href="">
                        <Button commandType={'AddProduct'} />
                    </a>
                </div>

                <TableProduct />
            </div>
        </div>
    )
}

export default HomeAdmin;