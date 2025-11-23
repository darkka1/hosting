import ProductCard from "../components/ProductCard";

export default function JasaSamp() {
  const jasaSampPackage = {
    title: "Jasa SA:MP",
    price: "",
    desc: `
1. Setup server
2. Config gamemode
3. Install plugin
4. Backup rutin
5. Maintenance mingguan
6. Custom script
7. Optimasi performa
8. Support 24/7
9. Migrasi server lama
10. Konsultasi teknis
    `
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-neonGreen drop-shadow-neon animate-glow">
        Jasa SA:MP
      </h1>
      <div className="mt-10 max-w-2xl mx-auto">
        <ProductCard {...jasaSampPackage} />
      </div>
    </div>
  );
}