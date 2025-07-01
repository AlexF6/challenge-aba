
//src/App.jsx
import React from 'react';
import "./App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/header/Header.jsx"
import Note from './components/layout/note-list/Note.jsx';
import CreateButton from './components/layout/note-list/CreateButton.jsx';
import NoteButtons from './components/layout/note-actions/NoteButtons.jsx';

function App() {
  
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='header-content'>
        <Header/>
        <div className='main-section'>

          <div className='note-list'>
            <CreateButton/>
            <Note content="Primera nota de prueba xd" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Segunda nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Tercera nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Cuarta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Quinta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
          </div>

          <div className='note-details'>

          </div>

          <div className='note-actions'>
            <NoteButtons/>
                          
          </div>

        </div>

        </div>
      </div>

    
  );
}

export default App;