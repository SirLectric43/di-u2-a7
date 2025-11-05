import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    // Solo avanzar si no estamos en la última escultura
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    // Solo retroceder si no estamos en la primera escultura
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <div>
        <button onClick={handlePrevClick} disabled={index === 0}>
          Anterior
        </button>
        <button onClick={handleNextClick} disabled={index === sculptureList.length - 1}>
          Siguiente
        </button>
      </div>

      <h2>
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>

      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}