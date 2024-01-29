
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importez PropTypes depuis 'prop-types'
import data from '../logements.json';
import '../styles/_Rating.scss';

function Rating() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id) || {};
    const rating = logement.rating || 0;

    const generateStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starColor = i <= rating ? 'yellow' : 'gray';
            stars.push(<Star key={i} fill={starColor} />);
        }
        return stars;
    };

    return (
        <div>
            {generateStars()}
        </div>
    );
}

const Star = ({ fill }) => (
    <div className={`star ${fill}`} />
);

// Ajoutez une validation de type pour la propriété 'fill'
Star.propTypes = {
    fill: PropTypes.string.isRequired, // Vous pouvez ajuster le type en fonction de vos besoins
};

export default Rating;
