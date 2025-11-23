import ProductCard from "../components/ProductCard";
import { resellerPackages } from "../data/resellerPackages";

export default function ResellerPanel() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-neonBlue drop-shadow-neon animate-glow">
        Reseller Panel
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {resellerPackages.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}