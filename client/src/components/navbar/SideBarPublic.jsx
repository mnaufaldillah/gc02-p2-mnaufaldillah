import PropTypes from 'prop-types';

function SideBarPublic({ dataCategories }) {
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
                            {dataCategories.map((item) => {
                                return (
                                    <option  key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
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

SideBarPublic.propTypes = {
    dataCategories: PropTypes.array
}

export default SideBarPublic;