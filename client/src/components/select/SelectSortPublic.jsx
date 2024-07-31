function SelectSortPublic() {
    return (
        <div className="row p-3">
            <div className="col-2">
                Diurut dari:
            </div>
            <div className="col-2">
                <button className="btn btn-dark btn-sm">Bawah ke Atas</button>
            </div>
            <div className="col-2">
                <button className="btn btn-dark btn-sm">Atas ke Bawah</button>
            </div>
        </div>
    )
}

export default SelectSortPublic;