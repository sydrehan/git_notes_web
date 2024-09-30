import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import DepartmentPage from './Pages/DepartmentPage';
import NotesPage from './Pages/NotesPage';
import AboutUsPage from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;