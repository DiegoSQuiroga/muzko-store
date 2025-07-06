import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

        {/* Columna 1 - Info contacto */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <p className="text-sm text-neutral-400">muzko.ink@gmail.com</p>
          <p className="text-sm text-neutral-400">Envíos a toda Argentina</p>
        </div>

        {/* Columna 2 - Instagram + Artista */}
        <div className="text-center md:text-right">
          <a
            href="https://www.instagram.com/muzko.ink/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center md:justify-end items-center gap-2 hover:text-yellow-400 transition"
          >
            <Instagram size={20} />
            <span className="text-sm font-semibold">@muzko.ink</span>
          </a>
          <p className="text-sm text-neutral-400 mt-1">Tomas Zavallo</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Muzko Ink. Todos los derechos reservados.
      </div>
    </footer>
  );
}
