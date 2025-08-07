import Header from "@/components/Header/Header";
import { productsData } from "@/data/products";

export default function ClientLayout({ children }) {
  const totalProducts = productsData.length;
  
  return (
    <>
      <Header totalProducts={totalProducts} />
      {children}
    </>
  );
}
