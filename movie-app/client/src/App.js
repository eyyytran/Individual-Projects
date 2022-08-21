import { Component, useState, useEffect } from 'react'

const App = () => {
    const [data, setData] = useState({ apiResponse: '' })

    useEffect(() => {
        const callAPI = async () => {
            try {
                const response = await fetch('/express_backend')
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        callAPI()
    }, [])

    return <div className='App'>{data.express}</div>
}

export default App
