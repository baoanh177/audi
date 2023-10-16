import { useEffect, useState } from "react";
import getData from "~/components/API";
import cl from './header.module.scss'
import DesktopHeader from './components/DesktopHeader';

function Header() {
    const [data, setData] = useState()
    const [active, setActive] = useState(null)

    useEffect(() => {
        getData('header')
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <header className={cl.header}>
                <DesktopHeader props={{data: data, active, setActive}}/>
            </header>
            <div
                className={cl.overlay}
                style={
                    active != null ? 
                    {opacity: 1, visibility: 'visible'}:
                    {}
                }
                onClick={() => setActive(null)}
            ></div>
        </>
    )
}

export default Header;