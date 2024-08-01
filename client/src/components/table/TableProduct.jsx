import Button from "../button/Button";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function TableProduct({dataProducts, fetchProducts}) {
    // const products = [
    //     {
    //         id: 1,
    //         name: 'HP Pavilion Aero',
    //         price: 15000000,
    //         stock: 5,
    //         imageUrl: `https://id-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08964442_1.png`,
    //         Category: {
    //             id: 1,
    //             name: `Iconic Laptop`
    //         },
    //         User: {
    //             id: 1,
    //             name: `Naufaldillah123`
    //         }
    //     }
    // ]

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
                    {dataProducts.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td><img src={item.imgUrl} alt="Gambar Produk" width="100" /></td>
                                <td>{item.Category.name}</td>
                                <td>{item.User.name}</td>
                                <td className="justify-content-between">
                                    <Link to={`/admin/products/${item.id}/edit`}>
                                        <Button commandType={`EditProduct`}/>
                                    </Link>
                                    <Link to={`/admin/products/${item.id}/upload-image`}>
                                        <Button commandType={`UploadImage`}/>
                                    </Link>
                                    <Button commandType={`DeleteProduct`} productId={item.id} fetchProducts={fetchProducts}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

TableProduct.propTypes = {
    dataProducts: PropTypes.array,
    fetchProducts: PropTypes.func
}

export default TableProduct;