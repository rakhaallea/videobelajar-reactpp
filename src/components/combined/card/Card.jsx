// Fontawesome Stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // bintang kosong

const Card = ({ img, title, instructor, ratings, price }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => {
            if (rating >= i + 1) {
                // full star
                return <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />;
            } else if (rating >= i + 0.5) {
                // half star
                return <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />;
            } else {
                // empty star
                return <FontAwesomeIcon key={i} icon={faStarRegular} className="text-gray-300" />;
            }
        });
    };


    return (
        <>
            <div className="card">
                <main className="card-content">
                    <img src={img} alt="" className="card-image flex-2/5" />

                    <div className="desc flex flex-col gap-[8px]">
                        <h1 className="title">
                            {title}
                        </h1>
                        <div className="profile">
                            <img src={instructor.img} alt="" className="icon-image" />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">{instructor.name}</h1>
                                <p className="font-thin">{instructor.position}</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="card-footer flex justify-between items-center">
                    <div className="ratings flex gap-[8px] items-center">
                        <div className="stars">
                            {renderStars(ratings.stars)}
                        </div>
                        <div className="reviews underline flex items-center gap-[4px]">
                            <p className="text-sm text-dark-secondary">{ratings.stars} ({ratings.reviews})</p>
                        </div>
                    </div>
                    <div className="price">
                        <p className="text-xl font-bold text-primary">{price}</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Card