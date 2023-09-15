import { useNavigate } from "react-router-dom"
import cl from "./hero.module.scss"
import images from "~/assets/images"
import Button from "~/components/Button"

function Hero() {
    const navigate = useNavigate()
    return (
        <section className={cl.hero}>
            <div className={cl.shadow}></div>
            <img src={images.banner} alt="Audi banner" className={cl.banner}/>
            <div className={cl.heading}>
                <h1 className={cl.title}>Hè sôi động cùng Audi</h1>
                <p className={cl.desc}>
                    Chương trình khuyến mãi "Hè sôi động cùng Audi"
                    kèm gói bảo hiểm vật chất 02 năm dành cho tất cả
                    các mẫu xe bắt đầu từ ngày 16/06 đến hết
                    30/09/2023.
                </p>
                <div className={cl.actions}>
                    <Button type='lightSolid' onClick={() => navigate('/discovery')}>Khám phá ngay</Button>
                    <Button type='lightNoBg' size="md">Đăng ký lái thử xe</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
