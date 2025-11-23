import { jasaSamp } from "../data/jasaSamp";
import { sendToWhatsApp } from "../utils/whatsapp";

export default function JasaSamp() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-metallic">{jasaSamp.title}</h1>

      <ul className="mt-5 list-disc ml-5 text-gray-300">
        {jasaSamp.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>

      <button
        onClick={() => sendToWhatsApp(`Saya Mau Pesan ${jasaSamp.title}`)}
        className="mt-5 bg-metallic text-black px-5 py-2 rounded-lg hover:bg-white"
      >
        Pesan Sekarang
      </button>
    </div>
  );
}