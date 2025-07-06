import React from 'react';
import Note from './Note';
import CreateButton from './CreateButton';
import './NoteList.css';

const NoteList = () => {
    return (
        <div className='note-list-container'>
            <CreateButton/>
            <Note content="React Performance Optimization" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Segunda nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Tercera nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Cuarta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
            <Note content="Quinta nota de prueba" tag1="Dev" tag2="Travel" date="24 Junio 2025"/>
        </div>
    );
}

export default NoteList;
