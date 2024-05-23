import React from 'react';

function FormRiparazione({onSubmit}){
  return (
    <div className="flex justify-center items-center h-full pt-20 pb-20">
      <div className="w-3/4 lg:w-3/4 xl:w-2/4">
        <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Crea una nuova richiesta di riparazione</div>
            <p className="text-gray-700 text-base">
               Perfavore inserisci le informazioni necessarie per la creazione di una nuova richiesta di riparazione.
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
                  placeholder="Inserisci il nome della richiesta di riparazione."
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
                  placeholder="Inserisci la descrizione della richiesta"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailRichiedente">
                  Email del richiedente
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="emailRichiedente"
                  type="email"
                  placeholder="Inserisci l'email del titolare della richiesta"
                />
              </div>
              <div className="mb-4 justify-around flex">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    document.getElementsByName("nome")[0].value = "";
                    document.getElementsByName("descrizione")[0].value = "";
                    document.getElementsByName("emailRichiedente")[0].value = "";
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

export default FormRiparazione;

