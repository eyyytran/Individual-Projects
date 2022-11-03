import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    )
}

export default App
