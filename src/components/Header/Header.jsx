import styles from './Header.module.css';

const Header = ({ titulo, subtitulo, totalProducts = 0 }) => {
  const tituloExibido = titulo ? titulo : "🔋📱 Connect Store 🛍️💻";
  const subtituloExibido = subtitulo ? subtitulo : "Encontre os produtos eletrônicos que você procura aqui!";
  return (
    <div className={styles.header}>
      <h1>{tituloExibido}</h1>
      <p>{subtituloExibido}</p>
      <p>Total de produtos: <span>{totalProducts}</span></p>
    </div>
  );
};

export default Header;