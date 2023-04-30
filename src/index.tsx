import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import App from './App'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Router>
        <App />
    </Router>
)
