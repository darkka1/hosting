import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-5 bg-metallic text-black shadow-lg flex gap-6 font-semibold">
      <Link to="/">Home</Link>
      <Link to="/bot">Bot Hosting</Link>
      <Link to="/gta">GTA SAMP Hosting</Link>
      <Link to="/minecraft">Minecraft</Link>
      <Link to="/admin-panel">Admin Panel</Link>
      <Link to="/reseller-panel">Reseller Panel</Link>
      <Link to="/jasa-samp">Jasa SA:MP</Link>
    </nav>
  );
}