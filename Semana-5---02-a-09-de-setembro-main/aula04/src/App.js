import react, {useState, createContext} from 'react';
import ContadorCliques from './ContadorCliques';

export const CliqueContext = createContext(0);

function App() {
  const [cliques,setCliques] = useState([0, () => {}]);
  return(
    <CliqueContext.Provider value={[cliques, setCliques]}> 
      <div>
        <ContadorCliques />
      </div>
      </CliqueContext.Provider>
  );
}

export default App;