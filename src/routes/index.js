import Home from "~/pages/Home"
import Products from "~/pages/Products"
import News from "~/pages/News"

const publicRoute = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/news', component: News },
]

const privateRoute = [

]

export { publicRoute, privateRoute }