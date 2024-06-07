// File: HomepageContent.tsx

import React from "react";
import '../style.css';

export default function HomepageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">
          Benvenuti su FixMi
        </h1>
        <p className="text-center text-gray-600 text-xl mb-6">
          Il tuo negozio di fiducia per articoli IT e servizi di riparazione.
          Esplora i nostri prodotti e scopri le nostre offerte!
        </p>
        <div className="flex justify-between">
          <a href="/shop" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Scopri il nostro negozio
          </a>
          <a href="/auth" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Accedi nel profilo
          </a>
          <a href="/feedback" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Lasciaci un feedback
          </a>
        </div>
      </div>
    </div>
  );
}

