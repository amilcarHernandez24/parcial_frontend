import styles from "./card.module.css";

const Card = ({ client }) => {
  return (
    <div className={styles.container}>
      <h2>
        Gracias {client.name} {client.lastName} por registrarte en nuestro GYM
      </h2>
      <h3>Informacion del cliente:</h3>
      <ul>
        <li>Edad: {client.age}</li>
        <li>Peso: {client.weight} kg</li>
      </ul>
    </div>
  );
};

export default Card;
