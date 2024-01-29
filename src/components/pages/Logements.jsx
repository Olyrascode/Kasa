
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Dropdown from "../Dropdown";
import Carousel from "../logementspage/Caroussel";
import data from '../logements.json';
import Title from '../logementspage/Title';
import Localisation from "../logementspage/Localisation";
import Tag from '../logementspage/Tag';
import Host from '../logementspage/Host';
import Rating from '../logementspage/Rating';

function Logements() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        // Trouver l'élément correspondant dans le tableau de données en fonction de l'id
        const foundItem = data.find(item => item.id === id);

        // Si l'élément n'est pas trouvé, rediriger vers la page d'erreur
        if (!foundItem) {
            navigate('*'); // Vous pouvez remplacer '*' par l'URL de la page d'erreur
        } else {
            setCurrentItem(foundItem);
        }
    }, [id, navigate]);

    if (!currentItem) {
        // Gérer le cas où l'id n'est pas défini ou si currentItem n'a pas été trouvé
        navigate('/page-par-defaut'); // Remplacez '/page-par-defaut' par l'URL de la page par défaut
        return null; // Vous pouvez également choisir de ne rien rendre ici
    }

    return (
        <div>
            <Header />
            <Carousel />
            <div className="logementinfos">
                <div className="logementHostlocation">
                    <div className="leftPanel">
                        <Title />
                        <Localisation />
                        <Tag tags={currentItem.tags} />
                    </div>
                    <div className="rightPanel">
                        <Host />
                        <Rating />
                    </div>
                </div>
                <div className="dropdown">
                    <Dropdown equipementContent={currentItem.equipementContent} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logements;
