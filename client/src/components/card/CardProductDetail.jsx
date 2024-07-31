
import Button from "../button/Button";

function CardProductDetail() {
    const product = {
        id: 1,
        name: 'Lenovo Ideapad Slim 3',
        price: 15000000,
        stock: 5,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odit ipsum nihil, 
                                fugiat aperiam in blanditiis nobis omnis repudiandae debitis error sunt tempore aut! 
                                Quo quia laboriosam numquam maxime facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Ipsam qui esse hic ducimus et? In dolor et, dicta fugiat tempora, 
                                esse mollitia molestias sequi ullam id sit, consequuntur dolores minus?`,
        imageUrl: `https://johnlewis.scene7.com/is/image/JohnLewis/111039687?wid=640&hei=853`,
        Category: {
            id: 1,
            name: `Memorable Light Laptop`
        }
    };

    return (
        <div className="mb-3 p-3 formula1-regular">
            <div className="row p-3 bg-light">
                <div className="col">
                    <img src={product.imageUrl} alt="" className="johnLewis-image-large" width="640" height="853" />
                </div>
                <div className="col">
                    <h5>{product.name}</h5>
                    <h5>{product.price}</h5>
                    <h6>Kategori: {product.Category.name}</h6>
                    <br />
                    <br />
                    <h5>Deskripsi Produk</h5>

                    <p>{product.description}</p>

                    <br />

                    <Button commandType={`ContactLarge`}/>
                </div>
            </div>
        </div>
)
}  

export default CardProductDetail;