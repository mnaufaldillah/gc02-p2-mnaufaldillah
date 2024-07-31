function SideBarPublic() {
    return (
        <div className="p-3 bg-light">
            <div className="p-3">
                <form action="" method="get">
                    <div className="p-1">
                        <label htmlFor="search">Search</label>
                        <input type="text" name="search" id="search" className="form-control form-control-sm" />
                    </div>
                    <div className="p-1">
                        <button type="submit" className="btn btn-dark btn-sm">Search</button>
                    </div>
                </form>
            </div>
            <div className="p-3">
                <form action="" method="get">
                    <div className="p-1">
                        <label htmlFor="categoryId">Kategori Laptop</label>
                        <select name="categoryId" id="categoryId" className="form-select">
                            <option value="1">Legendary Gaming Laptop</option>
                            <option value="2">Iconic Gaming Laptop</option>
                            <option value="3">Memorable Gaming Laptop</option>
                        </select>
                    </div>
                    <div className="p-1">
                        <button type="submit" className="btn btn-dark btn-sm">Filter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SideBarPublic;