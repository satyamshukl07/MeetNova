import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages import
import LandingPage from './pages/landing';
// import VideoPage from './pages/video';  // (future use)

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<LandingPage />} />

        <Route path ='/auth' element = {<Aunthentication/>}>

        </Routes>

        {/* Future page example */}
        {/* <Route path="/video" element={<VideoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;