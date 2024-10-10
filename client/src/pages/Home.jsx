import React, { useState, useEffect } from "react";
import BlogCards from "../components/BlogCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Home.css";
import pumpkinImage from "../assets/images/pumpkins2.png"; // Chemin de l'image

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mise à jour de la position de la citrouille avec la position de la souris
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX, // Position X de la souris
        y: event.clientY, // Position Y de la souris
      });
    };

    // Ajout de l'écouteur d'événement de mouvement de la souris
    window.addEventListener("mousemove", handleMouseMove);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="home__Navbar">
        <Navbar />
      </div>

      {/* Ajout de la citrouille qui suit la souris */}
      <div
        className="home__pumpkin"
        style={{
          position: "fixed",
          left: `${mousePosition.x + 20}px`, // Placer la citrouille 20px à droite de la souris
          top: `${mousePosition.y - 75}px`, // Ajustement pour la position Y
          transition: "transform 0.1s ease", // Animation pour lisser le suivi de la souris
        }}
      >
        <img
          src={pumpkinImage}
          alt="Bouncing Pumpkin"
          className="bouncing-pumpkin"
          style={{ width: "150px" }}
        />
      </div>

      <div className="home__main">
        <div className="home__Title">
          <p className="home__Title-h1">Welcome, dear developer</p>
          <p className="home__Title-h1">
            In this section, click on an article if you want to modify or delete
            it
          </p>
          <p className="home__Title-h1">
            You can also add new articles at the bottom of the page
          </p>
          <p className="home__Title-h1">"Have fun!"</p>
        </div>
        <div className="home__Blogcard">
          <BlogCards />
        </div>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
