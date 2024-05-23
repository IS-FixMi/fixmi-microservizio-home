import qs from "qs";

const baseURL = "http://127.0.0.1:7777";

export function creaRichiestaRiparazione(nome, descrizione, nomeRichiedente, cognomeRichiedente, emailRichiedente, numeroTelefono, token) {
    const options  = {
        method: "POST",
        headers:{"Content-Type": "application/x-www-form-urlencoded"},
        body: qs.stringify({
            token: token,
            nome: nome,
            descrizione: descrizione,
            taskTag: "Riparazione",
            taskStatus: "DaEseguire",
            nomeRichiedente: nomeRichiedente,
            cognomeRichiedente: cognomeRichiedente,
            emailRichiedente: emailRichiedente,
            numeroTelefono: numeroTelefono
       })
    }
    return fetch(baseURL.concat("/api/tasks/creaTask"), options);
}

export function creaRichiestaAssistenza(nome, descrizione, emailRichiedente, token) {
    const options  = {
        method: "POST",
        headers:{"Content-Type": "application/x-www-form-urlencoded"},
        body: qs.stringify({
            token: token,
            nome: nome,
            descrizione: descrizione,
            taskTag: "Assistenza",
            taskStatus: "DaEseguire",
            emailRichiedente: emailRichiedente,
       })
    }
    return fetch(baseURL.concat("/api/tasks/creaTask"), options);
}

export function creaRichiestaFeedback(nome, descrizione, ideePerMigliorare, disponibilitaAzienda, velocitaRiparazione, soddisfazioneRiparazione, soddisfazioneSitoWeb, token) {
    const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: qs.stringify({
      token: token,
      nome: nome,
      descrizione: descrizione,
      taskTag: "Feedback",
      taskStatus: "DaEseguire",
      ideePerMigliorare: ideePerMigliorare,
      disponibilitaAzienda: disponibilitaAzienda,
      velocitaRiparazione: velocitaRiparazione,
      soddisfazioneRiparazione: soddisfazioneRiparazione,
      soddisfazioneSitoWeb: soddisfazioneSitoWeb,
    }),
  };
    return fetch(baseURL.concat("/api/tasks/creaTask"), options);
}
