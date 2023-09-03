import { useState, useEffect } from "react"
import { createContext } from "react"

const dataContext = createContext()

function Provider({ path, children }) {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001${path}`)
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export { dataContext }
export default Provider
