// ProjectPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Pour gérer la navigation
import myPhoto from "../imges/R.jpeg";
import sondage from "../imges/sondage-scaled.jpg"
import destop from "../imges/photoInfor.jpg"

import "../styles/P.css"





const Projet = () => {
  return (
    <div className="container">
      <h1>Mes Projets</h1>
      <section className="project-page">

        <div className="project-image">
          <img src={sondage} alt="Project" />
        </div>

        <div className="project-description">
          <h2>Projet web</h2>
          <p>
            "J'ai eu l'opportunité de travailler sur plusieurs projets web passionnants,
            chacun mettant en avant des compétences techniques et des frameworks différents.
            Ces projets m'ont permis d'explorer diverses technologies de développement web,
            notamment React, Handlebars, Node.js, et bien d'autres. Chaque projet avait ses propres défis uniques,
            des objectifs spécifiques et des solutions technologiques adaptées,
            contribuant ainsi à élargir mon expérience et ma compréhension du développement web.
          </p>
          <Link to="/projetweb" className="button">
            Voir plus&nbsp;&rarr;
          </Link>
        </div>



      </section>
      <section className="project-page">
       
          <div className="project-image">
            <img src={destop} alt="Project" />
          </div>

          <div className="project-description">
            <h2>Projet Destop</h2>
            <p>
              Le projet "Gestion d'une école" avait pour objectif le développement d'une application de bureau en utilisant
              Java pour simplifier et améliorer la gestion globale d'une école. Les principales fonctionnalités mises en œuvre
              comprenaient la gestion des étudiants, des cours et des notes. L'application permettait d'ajouter, de modifier
              et de supprimer des informations sur les étudiants, de gérer les détails des cours, y compris les horaires et

              les enseignants, ainsi que de saisir et de stocker les notes académiques. Cette solution informatique a permis

              d'automatiser de nombreuses tâches administratives, augmentant ainsi l'efficacité de l'établissement scolaire et
              améliorant la qualité de l'éducation dispensée
            </p>
            <Link to="/projetweb" className="button">
              Voir plus&nbsp;&rarr;
            </Link>

          </div>
        </section>

    


        <section className="project-page">
       
       <div className="project-image">
            <img src={myPhoto} alt="Project" />
          </div>
          <div className="project-description">
            <h2>Détection du Mélanome avec Intelligence Artificielle</h2>
            <p>
              L'objectif de ce projet est d'utiliser l'intelligence artificielle pour la
              détection précoce du mélanome, un type de cancer de la peau. Nous avons
              développé un modèle d'apprentissage automatique capable d'analyser des images
              de grains de beauté et de repérer les signes de mélanome.
            </p>
            <Link to="/DetailleMelano" className="button">
              Voir plus&nbsp;&rarr;
            </Link>

          </div>
        



      </section >




    </div >
  );
};

export default Projet;



