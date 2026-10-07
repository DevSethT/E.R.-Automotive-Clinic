import "./ServiceCard.css";

function ServiceCard({ name, description, img }) {
    return (
        <div className="service-card">
            <img src={img} alt="Service icon" className="service-card__icon" />
            <h3 className="service-card__title">{name}</h3>
            <p className="service-card__description">{description}</p>
        </div>
    );
}

export default ServiceCard;