import React from 'react';
import "./App.css"
import SignUpForm from './pages/SignUpForm.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import SignInForm from './pages/SignInForm.jsx';

function App() {
  
  return (
    <Routes>
      <Route path="layout" element={<Layout />}/>
      <Route path="register" element={<SignUpForm />}/>
      <Route path="/" element={<SignInForm />}/>
    </Routes>
  );
}

export default App;