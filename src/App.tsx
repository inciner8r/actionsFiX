import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ViewMyReviews from './pages/ViewMyReviews';
import MyReviews from './pages/MyReviews';
import AllReviews from './pages/AllReviews';
import Footer from './Components/Footer';
import DynamicPage from './pages/DynamicPage';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import VerifiedProj from './pages/VerifiedProj';
import Vpn from './pages/Vpn';
import VerificationSteps from './pages/Verificationsteps';

const App: React.FC = () => {

  const background = {
    backgroundColor: '#141a31'
  }
  
  return (
    <Router>
      <div style={background}>
        <Navbar/>
        <Routes>
        <Route path="/view-my-reviews" element={<ViewMyReviews/>} />
          <Route path="/my-reviews" element={<MyReviews/>} />
          <Route path="/" element={<AllReviews />} />
          <Route path="/reviews/:id" Component={DynamicPage} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/verifiedproj" element={<VerifiedProj/>} />
          <Route path="/vpn" element={<Vpn/>} />
          <Route path="/verification-steps" element={<VerificationSteps/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
