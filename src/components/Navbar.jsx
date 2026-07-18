function Navbar({ setSection }) {
  return (
    <header className="fixed top-8 inset-x-0 z-50 flex justify-center">
      <nav className="flex items-center gap-12">

        <button
          onClick={() => setSection("inicio")}
          className="text-white text-lg font-semibold"
        >
          Cristian Avila
        </button>

        <button
          onClick={() => setSection("inicio")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Inicio
        </button>

        <button
          onClick={() => setSection("proyectos")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Proyectos
        </button>

        <button
          onClick={() => setSection("sobre-mi")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Sobre mí
        </button>

        <button
          onClick={() => setSection("contacto")}
          className="text-neutral-400 hover:text-white transition font-semibold"
        >
          Contacto
        </button>

      </nav>
    </header>
  );
}

export default Navbar;