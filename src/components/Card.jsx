// Card Component - Reusable card for displaying content
function Card({ title, description, icon, button }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {button && <div className="card-button">{button}</div>}
    </div>
  );
}

export default Card;
