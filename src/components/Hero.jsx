export default function Hero() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-center bg-gradient-to-br from-metallic/10 to-metallic/30 border-b border-metallic shadow-xl">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527443224154-9f1b0b8a5ddd?auto=format&fit=crop&w=1350&q=80')] 
        bg-cover bg-center opacity-20 blur-sm"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold text-metallic drop-shadow-lg">
          Future Hosting Panel
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          Hosting masa depan untuk Bot WhatsApp, GTA SAMP, Minecraft, Admin & Reseller Panel
        </p>

        <a
          href="/bot"
          className="mt-6 inline-block bg-metallic text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition shadow-lg"
        >
          Mulai Pesan
        </a>
      </div>
    </div>
  );
}