//src/App.jsx
import React from 'react';
import "./styles/index.css"
import "./styles/App.css"
import Sidebar from "./components/layout/sidebar/Sidebar.jsx"
import Header from "./components/layout/header/Header.jsx"
import Content from './components/layout/note-section/Content.jsx';
import Details from './components/layout/note-details/Details.jsx';
import Note from './components/layout/note-section/Note.jsx';
import { useState } from "react";
import Formulario from "./components/layout/note-section/Formulario.jsx"; 
/*import ArchivedIcon from './components/layout/note-actions/ArchivedIcon.jsx';*/
import NoteButtons from './components/layout/note-actions/NoteButtons.jsx';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='header-content'>
        <Header/>
        <div className='main-section'>

          <div className='note-section'>
            <Content onCreateClick={() => setMostrarFormulario(true)} />
            <Note content="Primera nota de prueba xd" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Segunda nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Tercera nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Cuarta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Quinta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
          </div>

          <div className='note-details'>
            {mostrarFormulario && (
              <Formulario onCancel={() => setMostrarFormulario(false)} />
            )}
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