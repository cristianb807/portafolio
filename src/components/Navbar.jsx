import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ setSection }) {
  const [open, setOpen] = useState(false);

  const goTo = (section) => {
    setSection(section);
    setOpen(false);
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 px-6">
      {/* ================= DESKTOP ================= */}
      <nav className="hidden md:flex items-center justify-center gap-12">
        <button
          onClick={() => goTo("inicio")}
          className="text-white text-lg font-semibold"
        >
          Cristian Avila
        </button>

        <button
          onClick={() => goTo("inicio")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Inicio
        </button>

        <button
          onClick={() => goTo("proyectos")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Proyectos
        </button>

        <button
          onClick={() => goTo("sobre-mi")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Sobre mí
        </button>

        <button
          onClick={() => goTo("contacto")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Contacto
        </button>
      </nav>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex items-center justify-between w-full max-w-screen-xl mx-auto px-3">
        {/* Foto de perfil */}
        <button
          onClick={() => goTo("inicio")}
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/perfil.png"
            alt="Cristian Avila"
            className="
              w-11
              h-11
              rounded-full
              object-cover
              border
              border-white/20
              shadow-lg
            "
          />
        </button>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ================= MENÚ MOBILE ================= */}
      {open && (
        <div
          className="
            absolute
            top-16
            left-6
            right-6
            md:hidden
            rounded-2xl
            bg-black/90
            backdrop-blur-xl
            border
            border-white/10
            p-6
            flex
            flex-col
            gap-5
          "
        >
          <button
            onClick={() => goTo("inicio")}
            className="text-left text-neutral-300 hover:text-white font-semibold transition"
          >
            Inicio
          </button>

          <button
            onClick={() => goTo("proyectos")}
            className="text-left text-neutral-300 hover:text-white font-semibold transition"
          >
            Proyectos
          </button>

          <button
            onClick={() => goTo("sobre-mi")}
            className="text-left text-neutral-300 hover:text-white font-semibold transition"
          >
            Sobre mí
          </button>

          <button
            onClick={() => goTo("contacto")}
            className="text-left text-neutral-300 hover:text-white font-semibold transition"
          >
            Contacto
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;