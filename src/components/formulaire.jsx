import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "../styles/fomulaire.css";

const initialValues = {
    name: "",
    email: "",
    message: ""
};

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
        errors.name = "Veuillez entrer votre nom complet";
    } else if (values.name.length < 4) {
        errors.name = "Votre nom est trop court";
    }
    if (!values.email) {
        errors.email = "Veuillez entrer votre adresse e-mail";
    } else if (!regex.test(values.email)) {
        errors.email = "L'adresse e-mail est incorrecte";
    }
    if (!values.message) {
        errors.message = "Veuillez entrer un message";
    } else if (values.message.length < 4) {
        errors.message = "Le message est trop court";
    }
    return errors;
};

export default function Formulaire() {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axios.post("http://localhost:3004/send-email", values);
            alert("E-mail envoyé avec succès !");
            resetForm({ values: {} }); // Réinitialiser le formulaire avec un objet vide
        } catch (error) {
            alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
            console.error(error);
            resetForm({ values: {} }); // Réinitialiser le formulaire avec un objet vide
        } finally {
            setSubmitting(false);
           

        }
        window.reload()


    };


    return (
        <div className="conteneur">
            <h1> Besoin plus d'informations ? Je suis là pour vous!</h1>

            <p>
                Que ce soit pour répondre à vos questions, discuter de vos besoins
                spécifiques ou simplement pour dire bonjour, n'hésitez pas à nous
                contacter via le formulaire ci-dessous. Nous sommes impatients de vous
                entendre et de vous aider dans la mesure du possible. Votre message est
                important pour nous, et nous nous engageons à vous répondre rapidement.
            </p>

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <div className="conteneur1">
                        <h1>Envoyer un message</h1>
                        <form action="mailto:someone@example.com" method="post" enctype="text/plain"></form>
                        <form onSubmit={formik.handleSubmit}
                            action="mailto:someone@example.com"
                            method="post"
                            enctype="text/plain">
                            <div className="form-row">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nom"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.name && formik.touched.name ? "input-error" : null
                                    }
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <span className="error">{formik.errors.name}</span>
                                )}
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="courriel@domaine.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.email && formik.touched.email ? "input-error" : null
                                    }
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <span className="error">{formik.errors.email}</span>
                                )}
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="8"
                                    cols="80"
                                    placeholder="Mettre un message"
                                    name="message"
                                    id="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.message && formik.touched.message ? "input-error" : null
                                    }
                                />
                                {formik.errors.message && formik.touched.message && (
                                    <span className="error">{formik.errors.message}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={
                                    !formik.dirty || !formik.isValid
                                        ? "disabled-btn"
                                        : "disabled-btn1"
                                }
                                disabled={!formik.dirty || !formik.isValid}
                            >
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                )}
            </Formik>

            <div className="info">
                <h1>Contactez-nous</h1>
                <p>
                    <span role="img" aria-label="phone">
                        📞
                    </span>{" "}
                    +33(0)613 4488 5455
                </p>
                <p>
                    <span role="img" aria-label="email">
                        ✉️
                    </span>{" "}
                    contact@saviezvous.fr
                </p>
                <p>
                    <span role="img" aria-label="location">
                        🏠
                    </span>{" "}
                    Rue de la Liberté,
                </p>
                <p>7900, Paris.</p>
            </div>
        </div>
    );
}
