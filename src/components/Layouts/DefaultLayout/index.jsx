import Footer from "../components/Footer"
import Header from "../components/Header"

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
                {children}
            <Footer/>
        </>
    )
}

export default DefaultLayout
