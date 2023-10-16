import { Link } from "react-router-dom";
import cl from "../../dHeader.module.scss"

function Menu({ props }) {
    const { data, active, activeToggle } = props

    return (
        <nav className={cl.menuWrapper}>
            <ul className={cl.menu}>
                {data?.categories.map(cate =>
                    <li
                        className={cate.id == active ? cl.active : ''}
                        key={cate.id}
                        onClick={() => Object.keys(cate.child).length > 0 && activeToggle(cate.id)}
                    >
                        <Link to={cate.path}>{cate.title}</Link>
                        {Object.keys(cate.child).length > 0 &&
                            <div
                                className={cl.dropMenu}
                                style={
                                    cate.id == active ? 
                                    {opacity: 1, visibility: 'visible'}:
                                    {}
                                }>
                                <ul className={cl.categories}>
                                    {cate.child.cates.map(cate =>
                                        <li key={cate.id} className={cl.category}>
                                            <Link to={cate.path}>{cate.title}</Link>
                                        </li>
                                    )}
                                </ul>
                                {Object.keys(cate.child).length > 0 &&
                                    <div className={cl.bannerWrapper}>
                                        <div className={cl.banner}>
                                            <img src={cate.child.banner.thumb} alt="" />
                                        </div>
                                        <Link to={cate.child.banner.path} className={cl.bannerLink}>
                                            <span>{cate.child.banner.title}</span>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                }
                            </div>
                        }
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Menu;