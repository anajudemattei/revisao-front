import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img 
        src={product.image} 
        alt={product.name} 
        className={styles.image} 
      />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>R$ {product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.rating}>
        <span className={styles.stars}>★ ★ ★ ★ ★</span> ({product.rating} - {product.reviews} avaliações)
      </p>
    </div>
  );
}