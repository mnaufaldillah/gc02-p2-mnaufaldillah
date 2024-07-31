import { useState } from "react";
import Header from "../../components/header/Header";
import SideBarPublic from "../../components/navbar/SideBarPublic";
import SelectSortPublic from "../../components/select/SelectSortPublic";
import CardProduct from "../../components/card/CardProduct";

function HomePublic() {
    return (
        <div className="bg-body-secondary">
            <div className="container">
                <Header title={`Icon Laptop`} />

                <div className="mb-3 p-3 row d-flex justify-content-between formula1-regular">
                    <div className="col-3">
                        <SideBarPublic />
                    </div>
                    
                    <div className="col-9">
                        <SelectSortPublic />

                        <div className="row p-3">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePublic;