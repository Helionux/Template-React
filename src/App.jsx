import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'
import LoginForm from './pages/LoginForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  )
}

export default App
