// import { useState } from "react";
import Header from "../../components/header/Header";
import CardProductDetail from "../../components/card/CardProductDetail";

function ProductDetail() {
    return (
        <div className="bg-body-secondary">
            <div className="container">
                <Header title={`Icon Laptop`} />

                <CardProductDetail />
            </div>
        </div>
    )
}

export default ProductDetail;