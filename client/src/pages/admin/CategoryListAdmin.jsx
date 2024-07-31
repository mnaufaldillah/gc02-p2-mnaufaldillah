import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import TableCategory from "../../components/table/TableCategory";

function CategoryListAdmin() {
    return (
        <div className="bg-body-secondary">
            <NavBar />
            
            <div className="container">
                <Header title={`Daftar Kategori`} />

                <TableCategory />
            </div>
        </div>
    )
}

export default CategoryListAdmin;