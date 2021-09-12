import Hero from "../components/HEro";
import ProductsGrid from "../components/ProductsGrid";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <ProductsGrid />
    </div>
  );
}
