import { memo } from "react"
import images from "~/assets/images"

function Search({ props }) {
    const { styles, data, setActive } = props
    const handleCloseMenu = (e) => {
        e.target.checked && setActive(null)
    }

    return (
        <div>
            <label
                htmlFor={styles.searchToggle}
                className={styles.search}
            >
                <img src={images.search} alt="" />
            </label>
            <input
                type="checkbox"
                id={styles.searchToggle}
                hidden
                onChange={(e) => handleCloseMenu(e)}
            />
            <div className={styles.searchWindow}>
                <label htmlFor={styles.searchToggle}>
                    <i className="fa-solid fa-chevron-left"></i>
                </label>
                <div className={styles.box}>
                    <div className={styles.search}>
                        <input
                            type="text"
                            placeholder="Models / Dealers / Audi Code"
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={styles.quickLinks}>
                        <span>Quick links</span>
                        <ul className={styles.links}>
                            {data &&
                                data.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.link}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <label
                htmlFor={styles.searchToggle}
                className={styles.overlay}
            ></label>
        </div>
    )
}

export default memo(Search)
