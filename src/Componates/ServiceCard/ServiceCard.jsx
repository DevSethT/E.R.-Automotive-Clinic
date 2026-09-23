import "./ServiceCard.css";

function ServiceCard() {
    return (
        <div className="service-card">
            <img src="src/assets/service-icon.svg" alt="Service icon" className="service-card__icon" />
            <h3 className="service-card__title">Service Title</h3>
            <p className="service-card__description">Service description goes here.</p>
        </div>
    );
}

export default ServiceCard;