import fondo from "../../assets/fondo.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 text-white">
      {/* Fondo */}
      <img
        src={fondo}
        alt="Fondo urbano"
        className="absolute inset-0 w-full h-full object-cover object-right z-0"
        style={{ opacity: 0.75, filter: "blur(1px)" }}
      />

      {/* Contenido */}
      <div className="max-w-3xl z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] text-[#f3f3f3]">
          Arte urbano. Vestite con identidad.
        </h1>
        <p className="text-xl md:text-2xl text-[#e0e0e0] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] mb-8 leading-relaxed">
          Muzko Ink transforma cada prenda en una obra de arte. Colores intensos, trazos rebeldes y cultura callejera en su máxima expresión.
        </p>

        {/* Botón estilizado */}
        <Link
          to="/collection"
          className="bg-yellow-500 text-black text-lg md:text-xl px-8 py-4 rounded-full font-bold tracking-wide shadow-md transition-all duration-300 ease-in-out hover:bg-red-400 hover:shadow-xl hover:scale-105"
        >
          Explorá la colección
        </Link>
      </div>
    </section>
  );
}