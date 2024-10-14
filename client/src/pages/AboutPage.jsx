import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/AboutPage.css";

function AboutPage() {
  useEffect(() => {
    const dragItems = document.querySelectorAll("img[draggable='true']");
    let selectedElement = null;
    let offsetX = 0;
    let offsetY = 0;

    function handleDragStart(event) {
      selectedElement = event.target;
      offsetX = event.clientX - selectedElement.getBoundingClientRect().left;
      offsetY = event.clientY - selectedElement.getBoundingClientRect().top;
      selectedElement.style.zIndex = 10; // Éléments déplacés en premier plan
    }

    function handleDragOver(event) {
      event.preventDefault(); // Empêche le comportement par défaut
    }

    function handleDrop(event) {
      event.preventDefault();
      const pumpkinArea = document.querySelector(".pumpkin-area");
      const rect = pumpkinArea.getBoundingClientRect();

      const x = event.clientX - offsetX - rect.left;
      const y = event.clientY - offsetY - rect.top;

      // Limiter les mouvements à l'intérieur de la zone de la citrouille
      if (
        x >= 0 &&
        x <= rect.width - selectedElement.width &&
        y >= 0 &&
        y <= rect.height - selectedElement.height
      ) {
        selectedElement.style.left = `${x}px`;
        selectedElement.style.top = `${y}px`;
      }

      selectedElement.style.zIndex = 5; // Réinitialiser le z-index
      selectedElement = null;
    }

    dragItems.forEach((item) => {
      item.addEventListener("dragstart", handleDragStart);
    });

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);

    return () => {
      dragItems.forEach((item) => {
        item.removeEventListener("dragstart", handleDragStart);
      });
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-container">
        <header>
          <h1>About Us</h1>
        </header>

        <section className="about-section">
          <p>
            Welcome to our website! We're passionate about web development, and
            our mission is to make it easy for you to manage your blog.
          </p>
          <p>
            Our team is made up of talented individuals who are dedicated to
            providing the best services/products to our customers. We believe in
            innovation, creativity and delivering exceptional value.
          </p>
          <p>
            Please feel free to visit our website to learn more about what we
            do. If you have any questions, please don't hesitate to contact us.
          </p>
        </section>

        {/* Section de Drag and Drop pour la citrouille */}
        <div className="pumpkin-container">
          <p>Drag and drop different features to decorate the pumpkin</p>

          <div className="pumpkin-area">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/pumpkin.svg"
              alt="pumpkin"
              id="pumpkin"
              className="pumpkin"
            />

            {/* Éléments drag and drop - Positionnés à gauche et à droite */}
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/eyes1.svg"
              alt="eyes1"
              id="eyes1"
              className="draggable-item"
              style={{ left: "20px", top: "259px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/eyes2.svg"
              alt="eyes2"
              id="eyes2"
              className="draggable-item"
              style={{ left: "20px", top: "525px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/eyes3.svg"
              alt="eyes3"
              id="eyes3"
              className="draggable-item"
              style={{ left: "20px", top: "169px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/eyes4.svg"
              alt="eyes4"
              id="eyes4"
              className="draggable-item"
              style={{ left: "20px", top: "416px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/eyes5.svg"
              alt="eyes5"
              id="eyes5"
              className="draggable-item"
              style={{ left: "20px", top: "343px" }}
            />

            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/mouth1.svg"
              alt="mouth1"
              id="mouth1"
              className="draggable-item"
              style={{ left: "630px", top: "537px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/mouth2.svg"
              alt="mouth2"
              id="mouth2"
              className="draggable-item"
              style={{ left: "630px", top: "429px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/mouth3.svg"
              alt="mouth3"
              id="mouth3"
              className="draggable-item"
              style={{ left: "630px", top: "233px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/mouth4.svg"
              alt="mouth4"
              id="mouth4"
              className="draggable-item"
              style={{ left: "630px", top: "324px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/mouth5.svg"
              alt="mouth5"
              id="mouth5"
              className="draggable-item"
              style={{ left: "630px", top: "158px" }}
            />

            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/nose1.svg"
              alt="nose1"
              id="nose1"
              className="draggable-item"
              style={{ left: "200px", top: "560px", width: "50px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/nose2.svg"
              alt="nose2"
              id="nose2"
              className="draggable-item"
              style={{ left: "330px", top: "560px", width: "50px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/nose3.svg"
              alt="nose3"
              id="nose3"
              className="draggable-item"
              style={{ left: "470px", top: "560px", width: "50px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/nose4.svg"
              alt="nose4"
              id="nose4"
              className="draggable-item"
              style={{ left: "270px", top: "550px", width: "45px" }}
            />
            <img
              draggable="true"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26612/nose5.svg"
              alt="nose5"
              id="nose5"
              className="draggable-item"
              style={{ left: "400px", top: "555px", width: "50px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
