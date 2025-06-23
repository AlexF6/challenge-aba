//src/App.jsx
import React from 'react';
import "./styles/index.css"
import "./styles/App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/Header/Header.jsx"

function App() {
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='main-content'>
        <Header/>
      </div>
    </div>
    
  );
}

export default App;