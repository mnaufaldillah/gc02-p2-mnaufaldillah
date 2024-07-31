function SelectSortPublic() {
    return (
        <div className="p-3">
            <select name="sort" id="sort" className="form-select w-25">
                <option selected disabled>Diurut dari:</option>
                <option value="ASC">Bawah ke Atas</option>
                <option value="DESC">Atas ke Bawah</option>
            </select>
        </div>
    )
}

export default SelectSortPublic;