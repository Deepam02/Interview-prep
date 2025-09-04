import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import JavaPage from './components/JavaPage';
import DbmsPage from './components/DbmsPage';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/java" element={<JavaPage />} />
          <Route path="/java/:topic" element={<TopicPage />} />
          <Route path="/dbms" element={<DbmsPage />} />
          <Route path="/dbms/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
