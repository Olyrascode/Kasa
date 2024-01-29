
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// function Card({ id, title, cover }) {
//   return (
//     <Link to={`Logements/${id}`}>
//       <div className="card">
//         <img src={cover} alt="Cover" className="card_cover" />
//         <h1 className='card_title'>{title}</h1>
//       </div>
//     </Link>
//   );
// }

// Card.propTypes = {
//   id: PropTypes.string.isRequired,
//   cover: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// };

// export default Card;
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ id, title, cover }) {
  // Vérifier si l'ID est valide
  const isValidId = id && id.length > 0;

  // Si l'ID n'est pas valide, rediriger vers la page d'erreur
  if (!isValidId) {
    return <Navigate to="/page-error" />;
  }

  return (
    <Link to={`Logements/${id}`}>
      <div className="card">
        <img src={cover} alt="Cover" className="card_cover" />
        <h1 className='card_title'>{title}</h1>
      </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
