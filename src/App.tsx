import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
