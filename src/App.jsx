import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Home from "./components/Home";
import Secao2 from "./components/Secao2";
import Secao3 from "./components/Secao3";
import Secao4 from "./components/Secao4";
import Rodape from "./components/Rodape";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // função que mostra a largura da tela conforma ela é ajustada  
  const showWidth = () => {
    setWidth(window.innerWidth);
  }

  // evento que chama a função showWidth toda vez que a tela é redimensionada
  window.onresize = showWidth;


  return (
    <div>
      {/* <div style={{position: 'fixed', top: '10px', right: '10px', fontFamily: 'Arial'}}>
        <p>Largura da tela {width}px</p>
      </div> */}
      <Cabecalho />
      <Home />
      <Secao2 />
      <Secao3 />
      <Secao4 />
      <Rodape />
    </div>
  )
}

export default App