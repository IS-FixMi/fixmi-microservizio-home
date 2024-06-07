import React from 'react';

function FormFeedback({onSubmit}){
  return (
    <div className="flex justify-center items-center h-full pt-20 pb-20">
      <div className="w-3/4 lg:w-3/4 xl:w-2/4">
        <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lasciaci un feedback!</div>
            <p className="text-gray-700 text-base">
               Come ti sei trovato su FixMi? Diccelo qui sotto!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="nome"
                  placeholder="Inserisci un nome"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descrizione">
                  Descrizione
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="descrizione"
                  type="text"
                  placeholder="Inserisci una descrizione"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ideePerMigliorare">
                  Idee Per Migliorare
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="ideePerMigliorare"
                  type="text"
                  placeholder="Inserisci qui qualche suggerimento per rendere il servizio migliore"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disponibilitaAzienda">
                  Disponibilità dell'azienda
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="disponibilitaAzienda"
                  type="text"
                  placeholder="FixMi è stata veloce nel svolgere il suo lavoro?"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="velocitaRiparazione">
                  Velocità della riparazione
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="velocitaRiparazione"
                  type="text"
                  placeholder="I nostri tecnici sono stati rapidi nella riparazione?"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soddisfazioneRiparazione">
                  Soddisfazione della riparazione
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="soddisfazioneRiparazione"
                  type="text"
                  placeholder="E' soddisfatto del nostro servizio di riparazione?"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soddisfazioneSitoWeb">
                  Soddisfazione del sito web
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="soddisfazioneSitoWeb"
                  type="text"
                  placeholder="E' soddisfatto del sito di FixMi?"
                />
              </div>
              <div className="mb-4 justify-around flex">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    document.getElementsByName("nome")[0].value = "";
                    document.getElementsByName("descrizione")[0].value = "";
                    document.getElementsByName("ideePerMigliorare")[0].value = "";
                    document.getElementsByName("disponibilitaAzienda")[0].value = "";
                    document.getElementsByName("velocitaRiparazione")[0].value = "";
                    document.getElementsByName("soddisfazioneRiparazione")[0].value = "";
                    document.getElementsByName("soddisfazioneSitoWeb")[0].value = "";
                  }}
                >
                  Cancella
                </button>
                <button
                  className="my_button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormFeedback;

