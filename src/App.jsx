import React from 'react';
import "./App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/header/Header.jsx"
import Note from './components/layout/note-list/Note.jsx';
import CreateButton from './components/layout/note-list/CreateButton.jsx';
import NoteButtons from './components/layout/note-actions/NoteButtons.jsx';
import NoteList from './components/layout/note-list/NoteList.jsx';

function App() {
  
  return (
    <div className='app-layout'>
      <Sidebar/>
      <div className='header-content'>
        <Header/>
        <div className='main-section'>

          <div className='note-list'>
            <NoteList/>
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