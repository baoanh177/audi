import { useEffect, useState } from "react"
import getData from "~/components/API"
import images from "~/assets/images"
import Styles from "./header.module.scss"
import Search from "./components/Search"
import Menu from "./components/Menu"

function Header() {
    const [data, setData] = useState()
    const [active, setActive] = useState(null)

    useEffect(() => {
        getData('header')
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <header>
            <div className={Styles.menu}>
                <a className={Styles.logo} href="/">
                    <img src={images.logo} alt="Audi" />
                </a>

                <Menu 
                    props={{
                        Styles,
                        categories: data && data.categories,
                        active,
                        setActive
                    }}
                />
            </div>
            <Search
                props={{
                    styles: Styles,
                    data: data && data.quickLinks,
                    setActive
                }}
            />
        </header>
    )
}

export default Header
