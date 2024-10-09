import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/RedirectAfterCreation.css";

function RedirectAfterCreation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { action } = location.state || { action: "created" }; // Default to "created" if no state is passed

  useEffect(() => {
    // Redirect to the homepage after 5 seconds
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to the homepage or desired page
    }, 7000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  // Choose the message based on the action
  const getMessage = () => {
    switch (action) {
      case "created":
        return "Thank you for creating your article!";
      case "updated":
        return "Your article has been successfully updated!";
      case "deleted":
        return "Your article has been successfully deleted!";
      default:
        return "Action completed successfully!";
    }
  };

  return (
    <div className="redirect-page">
      <img src="src\assets\images\pumpkins.jpg" alt="pumpkins" />
      <div className="pumpkin-animation">
        <img src="/images/pumpkin.png" alt="Pumpkin" />
      </div>

      <div className="redirect-message">
        <h1>{getMessage()}</h1>
        <p>
          You will be automatically redirected to the homepage in a few
          seconds...
        </p>
      </div>
    </div>
  );
}

export default RedirectAfterCreation;
