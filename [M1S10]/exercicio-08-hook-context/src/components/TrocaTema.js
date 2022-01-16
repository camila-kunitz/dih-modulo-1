import React from "react";
import GlobalContext from "../GlobalContext";

const TrocaTema = () => {
  const {alteraTema} = React.useContext(GlobalContext);

  return (
    <button onClick={() => alteraTema()}>
      Altera Tema
    </button>
  )
}

export default TrocaTema;
