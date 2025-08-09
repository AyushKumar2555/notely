import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="empty-msg">No notes yet...</p>
      ) : (
        notes.map((note) => (
          <div className="note" key={note.id}>
            <p>{note.text}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
