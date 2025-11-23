import ProductCard from "../components/ProductCard";
import { adminPackages } from "../data/adminPackages";

export default function AdminPanel() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-metallic">Admin Panel</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {adminPackages.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}