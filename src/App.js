/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
 
function App() {
 
  const [contador, setContador] = useState(0);
 
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
          Aumentar
      </button>
    </div>
  );
}

export default App