//src/App.jsx
import React from 'react';
import "./styles/index.css"
import "./styles/App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/header/Header.jsx"
import Content from './components/layout/content/Content.jsx';
import Details from './components/layout/details/Details.jsx';

function App() {
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='header-content'>
        <Header/>
        <div className='main-section'>
          <div className='note-section'>

          </div>
          <div className='note-details'>

          </div>
          <div className='note-actions'>

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;