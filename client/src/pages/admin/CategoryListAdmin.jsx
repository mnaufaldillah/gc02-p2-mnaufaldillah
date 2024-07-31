import Header from "../../components/header/Header";
import TableCategory from "../../components/table/TableCategory";

function CategoryListAdmin() {
    return (
        <div className="bg-body-secondary" style={{ height: '100vh' }}>
            
            <div className="container">
                <Header title={`Daftar Kategori`} />

                <TableCategory />
            </div>
        </div>
    )
}

export default CategoryListAdmin;