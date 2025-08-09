import React, { useState } from 'react';
import './NoteInput.css';

const NoteInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div className="note-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NoteInput;
