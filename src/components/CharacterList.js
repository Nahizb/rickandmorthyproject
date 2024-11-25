import React from 'react';
import Character from './Character.js';

function CharacterList({ characters, isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>; // Mostrar "Loading..." si isLoading es true
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Tres columnas
        gap: '10px',
        padding: '10px',
      }}
    >
      {characters.map((character) => (
        <Character key={character.id} character={character} id={character.id} />
      ))}
    </div>
  );
}

export default CharacterList;
