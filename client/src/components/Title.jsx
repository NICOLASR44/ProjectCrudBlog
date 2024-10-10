import PropTypes from "prop-types";
import "./styles/Title.css";

/**
 * Composant `Title` qui affiche un titre composé d'un texte en gras et en italique.
 *
 * @param {string} [props.htmlTag="h2"] - La balise HTML à utiliser pour le titre (h1, h2, etc.). Par défaut, c'est `h2`.
 * @param {string} props.boldText - Le texte à afficher en gras.
 * @param {string} props.italicText - Le texte à afficher en italique.
 *
 * @returns {JSX.Element} - Le composant `Title` rendu avec le tag HTML spécifié.
 */

/* Fonctionnement :
Ce composant prend deux props obligatoire : un texte en gras + italique.
Il est également possible de spécifier une balise HTML entre <h1> et <h6>
Si htmlTag est laissé vide, la balise par défaut sera h2
*/

function Title({ boldText, italicText, htmlTag, style = {} }) {
  const Tag = htmlTag;

  return (
    <Tag className="generic-title" style={style}>
      <span className="generic-title--bold">{boldText}</span>{" "}
      <span className="generic-title--italic">{italicText}</span>
    </Tag>
  );
}

Title.propTypes = {
  htmlTag: PropTypes.string,
  boldText: PropTypes.string.isRequired,
  italicText: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

Title.defaultProps = {
  htmlTag: "h2",
};

export default Title;
