import image12 from '../assets/images/image 12.png';
import wedding from '../assets/images/wedding-photography 1.png';
import bike from '../assets/images/mountain-bike 1.png';
import group65 from '../assets/images/Group 65.png';
import group78 from '../assets/images/Group 78.png';
import group79 from '../assets/images/Group 79.png';

const Cards = () => {
    return (
        <div className="cards flex gap-5">
            <div className="cards__card">
                <img src={image12} alt="image12" />
                <div className="cards__card__content">
                </div>
                <div className="cards__card mt-5">
                    <img src={group65} alt="group 65" />
                    <div className="cards__card__content">
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <img src={wedding} alt="wedding photography" />
                <div className="cards__card__content">
                </div>
                <div className="cards__card mt-5">
                    <img src={group78} alt="group 78" />
                    <div className="cards__card__content">
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <img src={bike} alt="mountain bike" />
                <div className="cards__card__content">
                </div>
                <div className="cards__card mt-5">
                    <img src={group79} alt="group 79" />
                    <div className="cards__card__content">
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <div className="cards__card__content">
                </div>
            </div>
        </div>
    );
}

export default Cards;