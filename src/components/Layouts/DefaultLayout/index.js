import Header from '../components/Header'
import Provider from "~/components/API"

function DefaultLayout({ children }) {
    return ( 
        <Provider path='/categories'>
            <Header/>
            { children }
        </Provider>
    )
}

export default DefaultLayout;