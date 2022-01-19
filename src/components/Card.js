import "./_card.css";

const Card = ({ photo }) => {
  return (
    <div className="photo-card">
      <figure>
        <img className="photo-card_img" src={photo.url} alt={photo.title} />
        <figcaption>{photo.title}</figcaption>
      </figure>
    </div>
  );
};

export default Card;
