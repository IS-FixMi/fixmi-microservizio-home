/*
 *   File: App.ts 
 *
 *   Purpose: this file contains the parent of all components
 *
 */ 

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './components/home'
import Riparazione from './components/Riparazione/riparazione.tsx';
import Success from './components/success.tsx';
import Error from './components/error.tsx';
import Assistenza from './components/Assistenza/assistenza.tsx';
import Feedback from './components/Feedback/feedback.tsx';

function App() {

  return (
    <BrowserRouter basename='/'>
      <main>
          <Routes>
            {/* Routing */}
            <Route path="/" element={<Home />}/>
            <Route path="/riparazione" element={<Riparazione />}/>
            <Route path="/assistenza" element={<Assistenza />}/>
            <Route path="/success" element={<Success />}/>
            <Route path="/error" element={<Error />}/>
            <Route path="/feedback" element={<Feedback />}/>
            <Route path="*" element={<Home />}/>
          </Routes>
      </main>

    </BrowserRouter>
  );

}

export default App;

