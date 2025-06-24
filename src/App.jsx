//src/App.jsx
import React from 'react';
import "./styles/index.css"
import "./styles/App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/header/Header.jsx"
import Content from './components/layout/content/Content.jsx';
import Details from './components/layout/details/Details.jsx';
import Note from './components/layout/content/Note.jsx';

function App() {
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='header-content'>
        <Header/>
        <div className='main-section'>
          <div className='note-section'>
            <Content />
            <Note content="Primera nota de prueba xd" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Segunda nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Tercera nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Cuarta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Quinta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
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