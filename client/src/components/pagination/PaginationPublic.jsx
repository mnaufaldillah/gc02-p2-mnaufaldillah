import PropTypes from "prop-types";
import axios from "../../config/axiosinstance";
import { useState } from "react";

function PaginationPublic({ setProducts, page, setPage, totalPage }) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    async function handlerPage() {
        try {
            setLoading(true);

            const currentPage = page;

            const { data } = await axios({
                url: `pub/products?page=${currentPage}`,
                method: 'GET'
            })

            setProducts(data.products);
            setPage(data.page);
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(errors);
        } finally {
            setLoading(false);
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={handlerPage}>
                        1
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={handlerPage}>
                        2
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

PaginationPublic.propTypes = {
    page: PropTypes.node,
    totalPage: PropTypes.totalPage,
    setProducts: PropTypes.func,
    setPage: PropTypes.func
}

export default PaginationPublic;