import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const pictures = data.find(item => item.id === id)?.pictures;

  useEffect(() => {
    // Mettez à jour l'index du carrousel lorsque l'id sélectionné change
    const selectedData = data.find(item => item.id === id);
    const selectedIndex = selectedData ? data.indexOf(selectedData) : 0;
    setCurrentIndex(selectedIndex);
  }, [id]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (pictures.length || 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (pictures.length || 1)) % (pictures.length || 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={goToPrev} className="arrow left-arrow">&#9665;</button>
        {pictures && pictures.length > 0 && (
          <img src={pictures[currentIndex]} alt="Cover" className="cover-image" />
        )}
        <button onClick={goToNext} className="arrow right-arrow">&#9655;</button>
      </div>
    </div>
  );
}

export default Carousel;




