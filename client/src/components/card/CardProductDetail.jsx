
import Button from "../button/Button";
import PropTypes from 'prop-types';

function CardProductDetail({dataDetail}) {
    // const product = {
    //     id: 1,
    //     name: 'Lenovo Ideapad Slim 3',
    //     price: 15000000,
    //     stock: 5,
    //     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odit ipsum nihil, 
    //                             fugiat aperiam in blanditiis nobis omnis repudiandae debitis error sunt tempore aut! 
    //                             Quo quia laboriosam numquam maxime facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    //                             Ipsam qui esse hic ducimus et? In dolor et, dicta fugiat tempora, 
    //                             esse mollitia molestias sequi ullam id sit, consequuntur dolores minus?`,
    //     imageUrl: `https://johnlewis.scene7.com/is/image/JohnLewis/111039687?wid=640&hei=853`,
    //     Category: {
    //         id: 1,
    //         name: `Memorable Light Laptop`
    //     }
    // };
    // console.log(dataDetail);

    return (
        <div className="mb-3 p-3 formula1-regular">
            <div className="row p-3 bg-light">
                <div className="col">
                    <img src={dataDetail.name} alt="Gambar Produk" className="johnLewis-image-large" width="640" height="853" />
                </div>
                <div className="col">
                    <h5>{dataDetail.name}</h5>
                    <h5>{dataDetail.price}</h5>
                    <h6>Kategori: {dataDetail.Category.name}</h6>
                    <br />
                    <br />
                    <h5>Deskripsi Produk</h5>

                    <p>{dataDetail.description}</p>

                    <br />

                    <Button commandType={`ContactLarge`}/>
                </div>
            </div>
        </div>
    )
}  

CardProductDetail.propTypes = {
    dataDetail: PropTypes.object
}

export default CardProductDetail;