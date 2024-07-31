import Button from "../button/Button";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function CardProduct({dataDetail}) {
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

    return (
        <div className="col-3 mb-3">
            <div className="card bg-light">
                <img src={dataDetail.imgUrl} alt="Gambar Produk" className="JohnLewis-image card-img-top"  width="234" height="312"/>
                <div className="card-body">
                    <Link to={`${dataDetail.id}`}>
                        <Button commandType={`DetailProduct`}/>
                    </Link>
                    <h6>{dataDetail.name}</h6>
                    <h6>{dataDetail.price}</h6>
                    <Link to="">
                        <Button commandType={`ContactLarge`}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    dataDetail: PropTypes.object
}

export default CardProduct;