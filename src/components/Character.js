import React from 'react';

function Character({ character, id }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        width: '100%', // Ajuste del ancho
      }}
      id={`character-${id}`} // Asignamos un id único para cada tarjeta
    >
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: '150px', // Cambié el tamaño de la imagen (ajústalo a tu preferencia)
          height: '150px', // Asegura que la imagen tenga la misma altura y ancho para ser circular
          borderRadius: '50%', // Hace la imagen circular
          objectFit: 'cover', // Asegura que la imagen se recorte correctamente si es más grande
        }}
      />
      <p>{character.origin.name}</p> {/* Acceso correcto a character.origin.name */}
    </div>
  );
}

export default Character;
