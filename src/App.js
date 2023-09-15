import { Routes, Route } from "react-router-dom"
import { publicRoute, privateRoute } from "./routes"

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component
                    return <Route key={index} path={route.path} element={<Page />} />
                })}
            </Routes>
        </div>
    )
}

export default App
