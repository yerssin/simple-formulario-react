import { useState } from "react";

const Formulario = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("enviando formulario...");
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.name,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button>enviar</button>
    </form>
  );
};

export default Formulario;
