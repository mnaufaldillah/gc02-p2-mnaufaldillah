import PropTypes from 'prop-types';

function TableCategory({dataCategories}) {
    // const categories = [
    //     { id: 1, name: `Legendary Gaming Laptop` },
    //     { id: 2, name: `Iconic Gaming Laptop` },
    //     { id: 3, name: `Memorable Gaming Laptop` }
    // ]

    return (
        <div className="mb-3 formula1-regular">
            <table className=" table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Nama Kategori</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCategories.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

TableCategory.propTypes = {
    dataCategories: PropTypes.array
}

export default TableCategory;