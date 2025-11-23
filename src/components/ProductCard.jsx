import { sendToWhatsApp } from "../utils/whatsapp";

export default function ProductCard({ title, price, desc }) {
  return (
    <div className="p-5 bg-metallic/20 border border-metallic rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-metallic">{title}</h3>
      <p className="text-gray-300">{desc}</p>
      <p className="mt-2 font-bold text-lg">{price}</p>

      <button
        onClick={() => sendToWhatsApp(`Saya Mau Pesan paket ${title}`)}
        className="mt-3 bg-metallic text-black px-4 py-2 rounded-lg hover:bg-white transition"
      >
        Pesan Sekarang
      </button>
    </div>
  );
}