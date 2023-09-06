// App.js

import React from 'react';
import styles from "../styles/main.module.css"
import { Link } from 'react-router-dom'; // Pour gérer la navigation

function Main() {
    return (
        <div className={styles.Main}>
            
                <div className={styles.content}>
                    <h1>Salut, je suis</h1>
                    <div className={styles.div1}>Hassan Abdi Galeb .</div>
                    <div className={styles.div2}>Programmeur Informatique  &</div>
                   
                    
                    <div className={styles.div2}> Programmeur Intelligence Artificielle (IA)</div>
                   
                    <p>
                        Je suis passionné par le monde de la programmation et de l'intelligence artificielle.
                        Avec une solide expérience dans le développement d'applications et une expertise particulière
                        en intelligence artificielle, je suis déterminé à créer des solutions innovantes pour des problèmes
                        du monde réel. Ma capacité à concevoir et à mettre en œuvre des modèles d'apprentissage automatique
                        et des algorithmes avancés me permet de créer des systèmes intelligents et efficaces.
                    </p>
                    <Link to="/projet" className={styles.detailButton}>Voir les Projets</Link>
                    
       
                </div>
            
        </div>
    );
}

export default Main;
