import { useState } from "react";
import cl from "../../dHeader.module.scss"

function Search() {
    const [searchModel, setSearchModel] = useState(false)
    
    return (
        <div
            className={cl.searchBtn}
            onClick={() => {

            }}
        >
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Search;