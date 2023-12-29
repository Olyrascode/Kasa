import { useParams } from "react-router-dom";
import data from '../logements.json';

function Host() {
   
    const { id } = useParams();
    const host = data.find(item => item.id === id)?.host;
    const hostName = host?.name;
    const hostPicture = host?.picture;
    return (
        <div className="hostDiv">
        <p>{hostName}</p>
        {hostPicture && <img src={hostPicture} alt="Hôte" />}
      </div>
)
}

export default Host