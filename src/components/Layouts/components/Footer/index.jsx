import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import cl from "./footer.module.scss"
import images from "~/assets/images"
import getData from "~/components/API"

function Footer() {
    const [data, setData] = useState()
    useEffect(() => {
        getData('footer')
            .then((data) => setData(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <footer className={cl.footer}>
            <div className={cl.pgup}>
                <span>Trở lại đầu trang</span>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            <div className={cl.row}>
                {data && data.cols.map((col, index) =>
                    <div className={cl.col} key={index}>
                        <h3 className={cl.title}>
                            <Link to={col.link}>{col.title}</Link>
                        </h3>
                        <ul className={cl.list}>
                            {col && col.categories.map((cate, index) =>
                                <li className={cl.category} key={index}>
                                    <Link to={cate.link}>{cate.title}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <div className={cl.socials}>
                <a href="#!">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#!">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#!">
                    <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#!">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <hr />
            <div className={cl.foot}>
                <div className={cl.copyright}>
                    © 2023 AUDI VN. Đã đăng ký bản quyền
                </div>
                <ul className={cl.aboutUs}>
                    <li><Link>Tuyển dụng</Link></li>
                    <li><Link>Thông tin đại lý</Link></li>
                    <li><Link>Điều khoản sử dụng</Link></li>
                    <li><Link>Chính sách quyền riêng tư</Link></li>
                </ul>
                <div className={cl.languages}>
                    <img src={images.global} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
