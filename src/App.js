import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList.js';
import './App.css'; // Asegúrate de que el archivo App.css esté en la carpeta src

// Componente NavPage
function NavPage({ currentPage, onNextPage, onPrevPage }) {
  return (
    <header className="nav-page">
      <button
        className="left btn btn-secondary btn-5m"
        onClick={onPrevPage}
        disabled={currentPage === 1} // Deshabilitar si estamos en la página 1
      >
        Previous Page
      </button>
      <h2>Page: {currentPage}</h2>
      <button className="right btn btn-primary btn-5m" onClick={onNextPage}>
        Next Page
      </button>
    </header>
  );
}

// Componente principal App
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  const fetchCharacters = (page) => {
    setIsLoading(true); // Mostrar "Loading..." mientras se cargan los datos
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the API:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters(currentPage); // Cargar personajes al cargar la página
  }, [currentPage]); // Ejecutar cuando cambie la página actual

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Avanzar a la siguiente página
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1)); // Volver a la página anterior
  };

  return (
    <div>
      {/* Mostrar NavPage antes del contenido principal */}
      <NavPage
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      
      <h1>Rick and Morty Characters</h1>
      {/* Pasar isLoading al componente CharacterList */}
      <CharacterList characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
