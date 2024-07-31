import PropTypes from 'prop-types';

function Button({commandType}) {
    if(commandType === `AddProduct`) {
        return (
            <button className="btn btn-dark">
                Buat Produk Baru
            </button>
        )
    }

    if(commandType === `EditProduct`) {
        return (
            <button className="btn btn-outline-info">
                Edit
            </button>
        )
    }

    if(commandType === `DeleteProduct`) {
        return (
            <button className="btn btn-outline-danger">
                Hapus
            </button>
        )
    }

    if(commandType === `DetailProduct`) {
        return (
            <button className="btn btn-primary w-100">
                Detail
            </button>
        )
    }

    if(commandType === `ContactLarge`) {
        return (
            <button className="btn btn-outline-primary w-100">
                Hubungi Toko
            </button>
        )
    }

    if(commandType === `ContactMedium`) {
        return (
            <button className="btn btn-outline-primary">
                Hubungi Toko
            </button>
        )
    }
}

Button.propTypes = {
    commandType: PropTypes.node,
}

export default Button;