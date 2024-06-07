/*
 *   File: success.tsx 
 *
 *   Purpose: show to the user that his action was successfull /
 *
 */ 

import React from "react"
import '../style.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Success() {
  
  // Use the Error Bundary system to catch errors
  return ( <>
     <Navbar />
     <div className="flex justify-center items-center h-full pt-20 pb-20">
                <div className="w-3/4 lg:w-3/4 xl:w-2/4">
                    <div className="max-w-xl mx-auto rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Errore!</div>
                            <p className="text-gray-700 text-base">
                                Qualcosa è andato storto nell'invio del modulo...
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="./" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block text-center">
                                Torna alla homepage
                            </a>
                        </div>
                    </div>
                </div>
            </div>
     <Footer />
  </>);
}
