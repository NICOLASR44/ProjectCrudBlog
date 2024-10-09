import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/ArticleCard.css";

function ArticleCard({ articleId, title, imageUrl }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/manage-article/${articleId}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCardClick();
    }
  };

  return (
    <div
      className="article-card"
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <img src={imageUrl} alt={title} className="article-card__image" />
      <div className="article-card__title">{title}</div>
    </div>
  );
}

ArticleCard.propTypes = {
  articleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
