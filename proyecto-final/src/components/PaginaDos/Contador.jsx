import React, { useState } from "react";

function Contador() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Contador</h2>
      <p>{counter}</p>
      <button onClick={handleAdd}>Sumar</button>
      <button>Restar</button>
      <button>Reiniciar</button>
    </>
  );
}

export default Contador;
