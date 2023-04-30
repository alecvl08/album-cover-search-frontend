import AlbumSearch from './AlbumSearch'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path='/' element={ <AlbumSearch/> } />
        </Routes>
    )
}
  
export default App