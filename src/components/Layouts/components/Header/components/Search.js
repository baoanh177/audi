

function Search({ styles, setActive }) {
    const handleCloseMenu = e => {
        e.target.checked && setActive(null)
    }
    return (
        <div>
            <label htmlFor={styles.searchToggle} className={styles.search}>
                <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 22l-8.3-8.3L22 22zM15.5 9c.1 3.5-2.6 6.4-6.1 6.5H9c-3.6 0-6.5-2.9-6.5-6.5S5.4 2.5 9 2.5s6.5 2.9 6.5 6.5c0 0 0 0 0 0z"
                        fill="none"
                        stroke="currentColor"
                    ></path>
                </svg>
            </label>
            <input
                type="checkbox"
                id={styles.searchToggle}
                hidden
                onChange={e => handleCloseMenu(e)}
            />
            <div className={styles.searchWindow}>
                <label htmlFor={styles.searchToggle}>
                    <i className="fa-solid fa-chevron-left"></i>
                </label>
                <div className={styles.box}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Models / Dealers / Audi Code"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={styles.quickLinks}>
                        <span>Quick links</span>
                        <ul className={styles.links}>
                            <li><a href="">Xưởng dịch vụ</a></li>
                            <li><a href="">Tra cứu chiến dịch triệu hồi</a></li>
                            <li><a href="">Thông tin đại lý</a></li>
                            <li><a href="">Tuyển dụng</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <label htmlFor={styles.searchToggle} className={styles.overlay}></label>
        </div>
    )
}

export default Search;