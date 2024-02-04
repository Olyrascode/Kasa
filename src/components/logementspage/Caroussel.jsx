import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json';
import Arrow from '../assets/images/arrow.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const pictures = data.find(item => item.id === id)?.pictures;



  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (pictures.length || 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (pictures.length || 1)) % (pictures.length || 1));
  };
 

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img onClick={goToPrev} src={Arrow} alt="Flèche gauche" className="arrow left-arrow" />
        {pictures && pictures.length > 0 && (
          <img src={pictures[currentIndex]} alt="Couverture" className="cover-image" />
        )}
        {pictures && pictures.length > 1 && (
          <div className='imgNmb'>
      <p className="image-number">{`${currentIndex + 1}/${pictures.length}`}</p>
    </div>
        )}
        <img onClick={goToNext} src={Arrow} alt="Flèche droite" className="arrow right-arrow" />
      </div>
    </div>
  );
}

export default Carousel;






