import { useParams } from "react-router-dom";
import data from '../logements.json';

function Rating() {
    const { id } = useParams();

    // Utilisez l'id pour trouver le titre correspondant dans vos données (logements.json)
    const rating = data.find(item => item.id === id)?.rating || "Titre par défaut";

    return (
        <div>
            <h1>{rating}</h1>
        </div>
    );
}

export default Rating;