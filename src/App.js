import Cabecalho from "./Componentes/Cabecalho";
import Conteudo from "./Componentes/Conteudo";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Conteudo />
      <Analytics />
    </div>
  );
}

export default App;