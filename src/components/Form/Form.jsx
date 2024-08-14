import { useState } from "react";
import Card from "../Card/Card";
import styles from "./form.module.css";

const Form = () => {
  const [client, setClient] = useState({
    name: "",
    lastName: "",
    age: "",
    weight: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setClient({ ...client, name: e.target.value });
  };

  const handleChangeLastName = (e) => {
    setClient({ ...client, lastName: e.target.value });
  };

  const handleChangeAge = (e) => {
    setClient({ ...client, age: e.target.value });
  };

  const handleChangeWeight = (e) => {
    setClient({ ...client, weight: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberRegex = /[0-9]/;

    const ageValue = parseInt(client.age);
    const weightValue = parseInt(client.weight);

    if (
      client.name.trim().length >= 3 &&
      client.lastName.trim().length >= 6 &&
      ageValue >= 13 &&
      numberRegex.test(weightValue)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.form_container}>
      {show ? (
        <Card client={client} />
      ) : (
        <>
          <h2>Registrate en Nuestro gym</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Nombre</label>
            <input
              type="text"
              value={client.name}
              onChange={handleChangeName}
            />
            <label>Apellido</label>
            <input
              type="text"
              value={client.lastName}
              onChange={handleChangeLastName}
            />
            <label>Edad</label>
            <input type="text" value={client.age} onChange={handleChangeAge} />
            <label>Peso (KG)</label>
            <input
              type="text"
              value={client.weight}
              onChange={handleChangeWeight}
            />
            <button className={styles.button}>enviar</button>
          </form>
        </>
      )}
      {error ? (
        <h3 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h3>
      ) : null}
    </div>
  );
};

export default Form;
