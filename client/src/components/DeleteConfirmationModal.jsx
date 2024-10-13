import PropTypes from "prop-types";
import "./styles/DeleteConfirmationModal.css";
import Spooky from "../assets/images/spooky.jpg";

function DeleteConfirmationModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Confirm Deletion</h2>
        {/* Div représentant le bras levé avec l'animation */}
        <div className="arm">
          <div className="spooky-container">
            <img src={Spooky} alt="spooky" className="spooky-image" />
          </div>
        </div>
        <p>Are you sure you want to delete this article?</p>
        <button type="button" onClick={onConfirm}>
          Yes, Delete
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
