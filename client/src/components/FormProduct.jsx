import PropTypes from 'prop-types';

function FormProduct({ name, description, price, stock, categoryId}) {
    const categories = [
        { id: 1, name: `Legendary Gaming Laptop` },
        { id: 2, name: `Iconic Gaming Laptop` },
        { id: 3, name: `Memorable Gaming Laptop` }
    ]

    return (
        <div className="mb-3 wi formula1-regular w-50">
            <form action="" method="put">
                <div className="mb-3">
                    <label htmlFor="name">Nama</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        defaultValue={name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Deskripsi</label>
                    <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={description}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Harga</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="form-control"
                        defaultValue={price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="stock">Jumlah Stok</label>
                    <input
                        type="number"
                        name="stock"
                        id="stock"
                        className="form-control"
                        defaultValue={stock}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoryId">Kategori Laptop</label>
                    <select name="categoryId" id="categoryId" className="form-select" value={categoryId}>
                       <option value={categories.id}>{categories.name}</option>
                    </select>
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

FormProduct.propTypes = {
    name: PropTypes.node,
    description: PropTypes.node,
    price: PropTypes.node,
    stock: PropTypes.node,
    categoryId: PropTypes.node
}

export default FormProduct;