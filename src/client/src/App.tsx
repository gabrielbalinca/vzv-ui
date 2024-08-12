// Modules import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles import
import './App.css';

// Pages import
import Navbar from './components/Navbar';
import Home from './pages';
import ProjectsPage from './pages/projectsPage';

// App
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
