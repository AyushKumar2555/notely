import React, { useState } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    if (!noteText.trim()) return;
    const newNote = { id: Date.now(), text: noteText };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Notes App</h1>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
