import Button from "./Button"

function TableProduct() {
    const products = [
        {
            id: 1,
            name: 'HP Pavilion Aero',
            price: 15000000,
            stock: 5,
            imageUrl: `https://id-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08964442_1.png`,
            Category: {
                id: 1,
                name: `Iconic Laptop`
            },
            User: {
                id: 1,
                name: `Naufaldillah123`
            }
        }
    ]

    return (
        <div className="mb-3 formula1-regular">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th >No.</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Jumlah Stok</th>
                        <th scope="col">Gambar</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Admin</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td><img src={item.imageUrl} alt="" width="100" /></td>
                                <td>{item.Category.name}</td>
                                <td>{item.User.name}</td>
                                <td className="justify-content-between">
                                    <a href="">
                                        <Button></Button>
                                    </a>
                                    <a href="">
                                        <Button></Button>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;