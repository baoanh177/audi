import { memo } from "react"
import { Link } from "react-router-dom"

function Menu({ props }) {
    const {Styles, categories, active, setActive} = props

    const handleActive = (id) => {
        active === id ? setActive(null) : setActive(id)
    }

    return ( 
        <nav>
            <input type="checkbox" id={Styles.menuToggle} hidden/>
            <div className={Styles.row}>
                <label htmlFor={Styles.menuToggle} className={Styles.mbMenu}>
                    <i className="fa-solid fa-bars"></i>
                    <span>Menu</span>
                </label>
                <label htmlFor={Styles.searchToggle} className={Styles.search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
            </div>
            <ul className={Styles.list}>
                {categories && categories.map(category =>
                    <li
                        key={category.id}
                        className={active === category.id ? Styles.active : ''}   
                        onClick={() => handleActive(category.id)}
                    >
                        <Link to={category.path}>{category.title}</Link>

                        {active === category.id &&
                            <div className={Styles.dropDown}>
                                <div className={Styles.back}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                    {category.title}
                                </div>
                                <div className={Styles.cates}>
                                    <ul>
                                        {category.child.cates && category.child.cates.map(cate =>
                                            <li key={cate.id}>
                                                <a href={cate.path}>
                                                    {cate.title}
                                                </a>
                                            </li> 
                                        )}
                                    </ul>
                                    {Object.keys(category.child).length != 0 &&
                                        <div className={Styles.banner}>
                                            <div>
                                                <img src={category.child.banner.thumb} alt="" />
                                            </div>
                                            <a href={category.child.banner.path}>
                                                <span>{category.child.banner.title}</span>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default memo(Menu)