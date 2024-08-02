import PropTypes from "prop-types";
import axios from "../../config/axiosinstance";
import { useState } from "react";
import Swal from "sweetalert2";

function PaginationPublic({ setProducts, page, setPage, totalPage }) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    // console.log(typeof page, '<-----------');

    async function handlerPage(numberPage) {
        try {
            setLoading(true);

            const { data } = await axios({
                url: `pub/products?page=${numberPage}`,
                method: 'GET'
            })

            setProducts(data.products);
            setPage(Number(data.page));
            
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(errors);

            Swal.fire({
                title: 'Error.',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Lanjut'
            });
        } finally {
            setLoading(false);
        }
    }

    function renderPagination() {
        const arr = [];
        let renderStartPoint = 1;
        let renderEndPoint = totalPage;

        if(totalPage >= 5 && page >= 3) {
            renderStartPoint = page - 2;
            renderEndPoint = page + 2
        }

        for(let i = renderStartPoint; i <= renderEndPoint; i++) {
            arr.push(
                <li className="page-item" key={i}>
                    <button className="page-link" onClick={ () => handlerPage(i) }>
                        {i}
                    </button>
                </li>
            )
        }

        return arr
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => handlerPage(page - 1)}>
                        <span aria-hidden="true">«</span>
                    </button>
                </li> */}

                { page !== 1 ? 
                <li className="page-item" key={page - 1}>
                    <button className="page-link" href="#" aria-label="Next" onClick={() => handlerPage(page - 1)}>
                        <span aria-hidden="true">«</span>
                    </button>
                </li> 
                : 
                <li className="page-item disabled" key={page - 1}>
                    <button disabled className="page-link" href="#" aria-label="Next" onClick={() => handlerPage(page - 1)} >
                        <span aria-hidden="true">«</span>
                    </button>
                </li>
                }

                {renderPagination()}

                { page !== totalPage ? 
                <li className="page-item" key={page + 1}>
                    <button className="page-link" href="#" aria-label="Next" onClick={() => handlerPage(page + 1)}>
                        <span aria-hidden="true">»</span>
                    </button>
                </li> 
                : 
                <li className="page-item disabled" key={page + 1}>
                    <button disabled className="page-link" href="#" aria-label="Next" onClick={() => handlerPage(page + 1)}>
                        <span aria-hidden="true">»</span>
                    </button>
                </li>
                }

                 {/* <li className="page-item">
                    <button disabled={page === totalPage} className="page-link" href="#" aria-label="Next" onClick={() => handlerPage(page + 1)}>
                        <span aria-hidden="true">»</span>
                    </button>
                </li> */}

            </ul>
        </nav>
    )
}

PaginationPublic.propTypes = {
    page: PropTypes.node,
    totalPage: PropTypes.node,
    setProducts: PropTypes.func,
    setPage: PropTypes.func
}

export default PaginationPublic;