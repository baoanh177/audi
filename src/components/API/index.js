const getData = async (path) => {
    try {
        const response = await fetch(`http://localhost:3001/${path}`)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

export default getData
