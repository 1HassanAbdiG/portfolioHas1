import styles from "../styles/Projetweb.module.css"


import Interphase from "../imges/InterphaseGraphique.png";
import validation from "../imges/validatio3.png";
import Graphique from "../imges/Graphique.png";
import Menu1 from "../imges/menu1.png";
import Menu2 from "../imges/menu2.png";
import Panier from "../imges/Panier.png";
import Commandes from "../imges/Commandes.png";
import connexion from "../imges/connexion.png";
import Inscription from "../imges/Inscription.png";

import cours from "../imges/AjCours.png";
import ecole from "../imges/ECOLE.png";
import ajoutEtudiant from "../imges/AjouterEtudiant.png";
import note from "../imges/note.png";
import parametre from "../imges/para.png";
import niveau from "../imges/niveau.png";


export default function ProjetWeb() {
    return <>
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Projet Web</h1>
                <p>Explorez nos projets en développement web.</p>
            </header>

            <div className={styles.projects}>

                <h2>Projet 1: Sondages</h2>
                <p className={styles.p}>
                    Mon premier projet web avait pour objectif d'aider un professeur en administration des affaires qui utilisait des questionnaires
                    papier dans ses cours. Le projet consistait en la création d'une application de sondage en ligne ayant
                    pour but d'aider les participants à mieux se comprendre ainsi que les personnes avec lesquelles ils communiquaient.
                    L'application de sondage interactive a été développée en utilisant JavaScript, HTML et CSS. Son principal objectif était
                    d'élucider la manière dont les individus établissent des relations et de mettre en lumière leurs motivations fondamentales.
                    Cette transition a grandement simplifié le processus d'évaluation et de communication, améliorant ainsi l'efficacité globale de l'enseignement et de l'évaluation
                </p>




                <div className={styles.Texte1}>

                    <div className={styles.graphique1}>
                        <img src={Interphase} alt='interphase' className={`${styles.interp} ${styles.doubleHeight}`} />
                        <img src={validation} alt='interphase' />
                        <img src={Graphique} alt='interphase' />
                    </div>

                </div>

                <div className={styles.project}>
                    <h2>Projet 2: Restaurant en ligne</h2>
                    <p className={styles.p}>

                        Mon deuxième projet consistait à créer un site web pour un restaurant avec la possibilité de commander de la nourriture en ligne pour une livraison à domicile. <br />
                        Voici les points clés de ce projet :
                        <ul className={styles.explicat}>
                            <li>
                                Utilisation de Handlebars.js comme moteur de templates pour développer le site web
                            </li>
                            <li>
                                Conception et implémentation des fonctionnalités de réservation en ligne, d'affichage du menu, de présentation des plats et de gestion des commentaires des clients.
                                Utilisation de HTML, CSS et JavaScript pour créer une interface utilisateur attrayante et réactive.
                            </li>
                            <li>
                                Mise en place d'un système de gestion des commandes en temps réel permettant aux clients de suivre l'état de leur commande en direct à l'aide de technologies de communication en temps réel telles que les WebSockets. Cela inclut l'affichage des mises à jour en temps réel, telles que la préparation de la commande, la livraison en cours et la confirmation de livraison.
                            </li>
                        </ul>

                        .


                    </p>

                    <div className={styles.photoResto}>
                        <img src={Menu1} alt='menu' className={styles.photRest}></img>
                        <img src={Inscription} alt='inscription' className={styles.photRest}></img>

                        <img src={connexion} alt='connexion' className={styles.photRest}></img>
                        <img src={Menu2} alt='menu' className={styles.photRest}></img>
                        <img src={Panier} alt='Panier' className={styles.photRest}></img>
                       
                        <img src={Commandes} alt='commandes' className={styles.photRest}></img>
                    </div>
                </div>


                <div className={styles.project}>
                    <h2>Projet 3: Gestion d'une école</h2>
                    <p className={styles.p}>
                    Mon troisième projet impliquait la création d'une application de gestion pour 
                    une école en utilisant React comme framework JavaScript. J'ai eu le rôle de chef d'équipe, 
                    collaborant avec six membres de l'équipe pour le mener à bien. Cette application visait à couvrir divers aspects 
                    de la gestion éducative et à fournir une solution complète 
                    pour l'administration scolaire en utilisant un framework JavaScript moderne, React.
                    </p>
                    <div className={styles.photoResto}>
                        <img src={ecole} alt='menu' className={styles.photRest}></img>
                        <img src={ajoutEtudiant} alt='inscription' className={styles.photRest}></img>
                        <img src={cours} alt='commandes' className={styles.photRest}></img>

                        <img src={note} alt='connexion' className={styles.photRest}></img>
                        <img src={parametre } alt='menu' className={styles.photRest}></img>
                        <img src={niveau} alt='Panier' className={styles.photRest}></img>
                       
                        

                        
                    </div>
                </div>
            </div>
        </div>
    </>
}
