import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import GlobalStyles from "~/components/GlobalStyles"
import { BrowserRouter as Router } from "react-router-dom"
import Provider from "~/components/API"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Router>
                <Provider path='/data'>
                    <App />
                </Provider>
            </Router>
        </GlobalStyles>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
