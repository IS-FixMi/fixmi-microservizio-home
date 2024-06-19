import React, { useEffect } from "react";
import Cookies from "js-cookie";
import '../../style.css';
import Navbar from '../navbar';
import Footer from '../footer';
import FormAssistenza from "./formAssistenza.tsx";
import { creaRichiestaAssistenza } from "../../utils/connection.ts";

export default function Assistenza() {

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    const token = Cookies.get('token');
    creaRichiestaAssistenza(
      e.target.elements.nome.value,
      e.target.elements.descrizione.value,
      e.target.elements.emailRichiedente.value,
      token
    )
    .then(response => {
      console.log("Success", response);
      window.location.href = "/success";
    })
    .catch(error => {
      window.location.href = "/error";
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
      <FormAssistenza onSubmit={handleSubmit} />
      <Footer />
    </>
  );
}

