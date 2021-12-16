import React from 'react';
import './global.css'
import './Components/Header';
import { Header } from './Components/Header';
import {HeaderOptions} from './Components/HeaderOptions'
function App() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <HeaderOptions />
    </div>
  );
}

export default App;
