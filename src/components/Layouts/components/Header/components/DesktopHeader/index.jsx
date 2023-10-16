import { Link } from "react-router-dom";
import cl from "./dHeader.module.scss";
import images from "~/assets/images";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";

function DesktopHeader({ props }) {
    const { data, active, setActive } = props
    
    const activeToggle = (id) => {
        active === id ? setActive(null) : setActive(id)
    }

    return (
        <>
            <Link className={cl.logo} to="/">
                <img src={images.logo} alt="Audi" />
            </Link>
            <Menu props={{
                data,
                active,
                activeToggle
            }}/>
            <Search/>
        </>
    )
}

export default DesktopHeader;