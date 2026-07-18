function Hero({ setSection }) {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]
          z-10
        "
      />


      <div
        className="
          relative
          z-20
          flex
          flex-col
          items-center
          text-center
          max-w-4xl
          gap-8
        "
      >

        <span
          className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-neutral-400
            rounded-full
            px-4
            py-2
            bg-white/5
            backdrop-blur-xl
          "
        >
          DESARROLLADOR DE SOFTWARE
        </span>


        <h1
          className="
            mt-6
            text-5xl
            md:text-7xl
            xl:text-[88px]
            font-black
            leading-[1.05]
            tracking-tight
            text-white
          "
        >
          Ideas hechas 
          <br />
          <span className="text-neutral-400">
            código.
          </span>
        </h1>


        <p
          className="
            mt-4
            max-w-xl
            text-lg
            leading-8
            text-neutral-400
          "
        >
          Desarrollo aplicaciones web rápidas, elegantes y escalables para
          empresas y emprendedores que buscan crecer con tecnología.
        </p>


        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-10
            flex-wrap
          "
        >

          <button
            onClick={() => setSection("proyectos")}
            className="
              group
              flex
              items-center
              gap-2
              text-xl
              font-semibold
              text-white
              transition-all
              duration-300
              hover:gap-4
            "
          >
            Ver proyectos

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </button>


          <button
            onClick={() => setSection("contacto")}
            className="
              text-xl
              font-medium
              text-neutral-500
              transition-all
              duration-300
              hover:text-white
            "
          >
            Hablemos
          </button>


        </div>

      </div>

    </section>
  );
}

export default Hero;