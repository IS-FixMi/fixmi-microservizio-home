import React, { useEffect } from "react";
import Cookies from "js-cookie";
import '../../style.css';
import Navbar from '../navbar';
import Footer from '../footer';
import FormFeedback from "./formFeedback.tsx";
import { creaRichiestaFeedback } from "../../utils/connection.ts";

export default function Assistenza() {

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    const token = Cookies.get('token');
    creaRichiestaFeedback(
      e.target.elements.nome.value,
      e.target.elements.descrizione.value,
      e.target.elements.ideePerMigliorare.value,
      e.target.elements.disponibilitaAzienda.value,
      e.target.elements.velocitaRiparazione.value,
      e.target.elements.soddisfazioneRiparazione.value,
      e.target.elements.soddisfazioneSitoWeb.value,
      token
    )
    .then(response => {
      console.log("Request successful", response);
    })
    .catch(error => {
      console.error("Request failed", error);
    });
  }

  useEffect(() => {
    const fetchData = () => {
      const token = Cookies.get('token');
      console.log(token);
      if (token === undefined) {
        window.location.href = "/auth";
        return;
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <FormFeedback onSubmit={handleSubmit} />
      <Footer />
    </>
  );
}

