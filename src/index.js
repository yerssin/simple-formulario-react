import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./componentes/Formulario";

const App = () => {
  return (
    <>
      <h1> hola que lo que</h1>
      <Formulario />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
