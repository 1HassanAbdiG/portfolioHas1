// DetailleMelano.js (ou .jsx) ou DetailleMelano.tsx (pour TypeScript)

import React, { useState, useEffect } from 'react';
import '../styles/ImageContainer.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct
import AR1 from "../imges/AR1.png";
import AR2 from "../imges/AR2.png";
import AR3 from "../imges/AR3.png";
import AR4 from "../imges/AR4.png";
import AR5 from "../imges/AR5.png";
import AR6 from "../imges/AR6.png";
import AR7 from "../imges/AR7.png";
import AR8 from "../imges/AR8.png";
import AR9 from "../imges/AR9.png";


function DetailleMelano() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageList = [AR1, AR2, AR3, AR4,AR5,AR6,AR7,AR8,AR9] // Liste des images

    // Fonction pour changer l'image
    const changeImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

    useEffect(() => {
        const interval = setInterval(changeImage, 2000); // Changer l'image toutes les 1000 ms (1 seconde)

        return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
    }, []);

    return (
        <div className="container">
            <div className="title">
                <h1>DETECTION DE MELANOME BASEE SUR UNE ANALYSE D’IMAGES DE LA PEAU</h1>
            </div>
            <div className="computer-frame">
                <img src={imageList[currentIndex]} alt="Image de la peau" />
            </div>

            <div className="AccueilProjet">

                <h2>Brève Description du Projet</h2>

                <div className="projets">
                    <div className="projet">
                        <h4>Pourquoi :</h4>
                        <p className="description">Le mélanome, un cancer de la peau agressif, présente des défis de diagnostic pour les dermatologues.
                            La détection précoce est essentielle pour améliorer les taux de survi</p>

                    </div>
                    <div className="projet">
                        <h4>But :</h4>
                        <p className="description" >Ce projet vise à développer une solution basée sur l'intelligence artificielle
                            pour aider les dermatologues à diagnostiquer le mélanome plus précisément et rapidement.</p>

                    </div>
                    <div className="projet">
                        <h4>Symptômes du mélanome :</h4>
                        <p className="description" > Les signes à surveiller comprennent
                            une asymétrie, des bords irréguliers et une couleur inégale de la lésion. Les mélanomes ont souvent un diamètre supérieur
                            à 6 mm, et toute évolution de la taille,  de la forme, de la couleur ou de la texture d'une lésion existante est préoccupante."</p>

                    </div>

                </div >
            </div >
            <br></br>

            <div className="Pretraitement">
                <h2>Prétraitement</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Traitement des données numériques</td>
                            <td>Préparation des données numériques pour l'analyse.</td>
                            <td>Python, Pandas, Numpy</td>
                        </tr>
                        <tr>
                            <td>Traitement des images</td>
                            <td>Préparation et amélioration des images pour l'analyse.</td>
                            <td>OpenCV, PIL</td>
                        </tr>
                        <tr>
                            <td>Feature Engineering</td>
                            <td>Création de nouvelles caractéristiques à partir des données.</td>
                            <td>Scikit-Learn, Python, Numpy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />


            <div className="ModeleML">

                <h2>Modèle ML</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Préparation du Dataset Initial</td>
                            <td>Présentation du jeu de données initial.</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Création du Modèle de Base</td>
                            <td>Création d'un modèle de base pour évaluer les performances initiales.</td>
                            <td>Scikit-Learn, Python</td>
                        </tr>
                        <tr>
                            <td>Préparation du Dataset Après Ajout de Caractéristiques</td>
                            <td>Description des données après l'ajout de nouvelles caractéristiques.</td>
                            <td>Scikit-Learn, Python, Numpy</td>
                        </tr>
                        <tr>
                            <td>Évaluation du Modèle Après Ajout de Caractéristiques</td>
                            <td>Présentation des résultats après l'ajout des nouvelles caractéristiques au modèle.</td>
                            <td>Scikit-Learn, Python</td>
                        </tr>
                        <tr>
                            <td>Préparation du Dataset avec Caractéristiques Avancées</td>
                            <td>Description du jeu de données avec les caractéristiques avancées.</td>
                            <td>Scikit-Learn, Python, Numpy</td>
                        </tr>
                        <tr>
                            <td>Évaluation des Modèles avec Caractéristiques Avancées</td>
                            <td>Présentation des résultats des modèles utilisant les caractéristiques avancées.</td>
                            <td>Scikit-Learn, Python</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br />
           
            <div className="SuiviGestionModeles">
                <h2>Suivi et Gestion des Modèles</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Avec MLflow</td>
                            <td>Gestion et suivi des modèles ML à l'aide de MLflow.</td>
                            <td>MLflow, Python</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="AutomatisationCreationModeles">
                <h2>Automatisation du Processus de Création de Modèles</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Autokeras</td>
                            <td>Automatisation du processus de création de modèles en utilisant Autokeras, une bibliothèque d'apprentissage automatique basée sur Keras.</td>
                            <td>Autokeras, Python</td>
                        </tr>
                        <tr>
                            <td>AutoML</td>
                            <td>Utilisation d'une solution AutoML (Apprentissage Automatique Automatisé) pour automatiser la création et l'optimisation de modèles de machine learning, ce qui inclut des étapes telles que la recherche d'hyperparamètres.</td>
                            <td>AutoML, Python</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br></br>
            <div className="ModeleDML">
                <h2>Modèle DML</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Modèle DML</td>
                            <td>Description des modèles d'apprentissage profond (Deep...)</td>
                            <td>TensorFlow, Keras, Python</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Explication">
                <h2>Explication</h2>
                <p>Explication des éléments architecturaux.</p>
            </div>

            <div className="Architecture">
                <h2>Architecture</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tâche</th>
                            <th>Explication</th>
                            <th>Outils Utilisés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Interface frontend (React)</td>
                            <td>Interface utilisateur développée en React pour la sélection et la visualisation d'images de lésions cutanées.</td>
                            <td>React</td>
                        </tr>
                        <tr>
                            <td>Capture de l'image par le dermatologue</td>
                            <td>Le dermatologue peut choisir une image de lésion cutanée à partir de l'emplacement spécifié. Une fois sélectionnée, l'image s'affiche à l’écran.</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Requête vers Flask</td>
                            <td>Une requête HTTP POST est créée en utilisant Axios pour envoyer l'image sélectionnée au backend Flask.</td>
                            <td>Axios, Flask</td>
                        </tr>
                        <tr>
                            <td>Traitement de l'Image dans Flask (Serveur de l'école)</td>
                            <td>Le backend Flask extrait l'image de la requête, extrait les caractéristiques du mélanome (ABCD), crée un masque pour la prédiction, utilise un modèle de Deep Learning (DML) pour la prédiction.</td>
                            <td>Python, Flask, TensorFlow, Keras, OpenCV</td>
                        </tr>
                        <tr>
                            <td>Envoi des résultats calculés par le backend Flask</td>
                            <td>Le backend génère un objet JSON contenant les caractéristiques extraites de l'image, la prédiction du mélanome, et l'image masquée après segmentation.</td>
                            <td>Python, Flask</td>
                        </tr>
                        <tr>
                            <td>Affichage des Résultats calculés sur le frontend React</td>
                            <td>Le frontend reçoit la réponse JSON du backend et affiche l'image masquée, les caractéristiques clés, et la prédiction du mélanome.</td>
                            <td>React</td>
                        </tr>
                        <tr>
                            <td>Ajout d'informations complémentaires par le dermatologue</td>
                            <td>Le dermatologue peut ajouter des informations complémentaires telles que le diagnostic, l'âge, le sexe, la localisation de la lésion.</td>
                            <td>React</td>
                        </tr>
                        <tr>
                            <td>Requête vers le backend Node.js</td>
                            <td>Une requête HTTP POST est créée en utilisant Axios pour envoyer les données du patient au backend Node.js.</td>
                            <td>Axios, Node.js</td>
                        </tr>
                        <tr>
                            <td>Intégration dans la Base de Données</td>
                            <td>Les informations du patient sont extraites de la requête et intégrées dans la base de données SQLite.</td>
                            <td>SQLite, Node.js</td>
                        </tr>
                        <tr>
                            <td>Réponse au Frontend</td>
                            <td>Le backend Node.js envoie une réponse pour indiquer le succès ou l'échec de l'opération d'archivage.</td>
                            <td>Node.js</td>
                        </tr>
                        <tr>
                            <td>Mise à Jour de l'Interface Utilisateur</td>
                            <td>Si l'opération d'archivage réussit, le frontend met à jour l'interface utilisateur en ajoutant les informations du nouveau patient.</td>
                            <td>React</td>
                        </tr>
                    </tbody>
                </table>
            </div>





        </div >
    );
}

export default DetailleMelano;
