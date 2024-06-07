import React, { useEffect } from "react";
import Cookies from "js-cookie";
import '../../style.css';
import Navbar from '../navbar';
import Footer from '../footer';
import FormRiparazione from "./formRiparazione.tsx";
import { creaRichiestaRiparazione } from "../../utils/connection.ts";

export default function Riparazione() {

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    const token = Cookies.get('token');
    creaRichiestaRiparazione(
      e.target.elements.nome.value,
      e.target.elements.descrizione.value,
      e.target.elements.nomeRichiedente.value,
      e.target.elements.cognomeRichiedente.value,
      e.target.elements.emailRichiedente.value,
      e.target.elements.numeroTelefono.value,
      token // Pass the token here
    )
    .then(response => {
      console.log("Request successful", response);
      window.location.href = "/success";
    })
    .catch(error => {
      console.error("Request failed", error);
      window.location.href = "/error";
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
      <FormRiparazione onSubmit={handleSubmit} />
      <Footer />
    </>
  );
}

