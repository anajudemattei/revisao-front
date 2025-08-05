import styles from './Header.module.css';

const Header = ({ titulo, subtitulo }) => {
  const tituloExibido = titulo ? titulo : "Loja de Eletrônicos";
  const subtituloExibido = subtitulo ? subtitulo : "Encontre os produtos eletrônicos que você procura aqui!";
  return (
    <div className={styles.header}>
      <h1>{tituloExibido}</h1>
      <p>{subtituloExibido}</p>
      <p>Total de produtos: <span id="totalProducts">0</span></p>
    </div>
  );
};

export default Header;