import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  // Fonction qui effectue une requête pour récupérer les données à partir de `resumeData.json`.
  // Elle utilise le hook `fetch`, puis utilise les méthodes `then` et `catch` pour gérer la réponse et les erreurs.
  const getResumeData = () => {
    fetch("/resumeData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La réponse du réseau n'est pas valide");
        }
        return response.json();
      })
      .then((data) => setResumeData(data))
      .catch((error) => {
        console.log(error);
        alert("Erreur lors de la récupération des données.");
      });
  };

  // Utilisation du hook `useEffect` pour exécuter `getResumeData` une fois que le composant est monté.
  // Ceci équivaut à `componentDidMount` dans les composants de classe.
  useEffect(() => {
    getResumeData();
  }, []);

  // Retourne l'élément JSX à afficher dans le navigateur.
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home data={resumeData.main} />} />
        <Route path="About" element={<About data={resumeData.resume} />} />
        <Route
          path="Portfolio"
          element={<Portfolio data={resumeData.portfolio} />}
        />
        {/* <Route path="Contact" element={<Contact data={resumeData.main} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
