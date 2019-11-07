import React from 'react';
import logo from './google_logo.png';
import searchlogo2 from './google_search2.png';
import Imfeeling from './Imfeeling.png';
import menu from './menu.png';
import loginp from './login.png';
import button1 from './1.png';
import button2 from './2.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div id="top">
      <div>Gmail</div>
      <div>이미지</div>
      <img src={menu} id="menu" ></img>
      <img src={loginp} id="loginp"></img>
      </div>
    <header>
      
    <img src={logo} width="300px" height="100px" id="logo" />
    
    </header>


<div className="putbox">
    <div className="put">
      <img src={button1} id="button1" className="btn"></img>
      <input></input>
      <img src={button2} id="button2" className="btn"></img>
      </div>

      </div>
      
    <main>
  
      <div className="div1">
      <img src={searchlogo2} id="searchlogo2">
      </img>
      <img src={Imfeeling} id="imfeeling">
      </img>
      </div>
    </main>
    </div>
   
   
  );
}

export default App;
