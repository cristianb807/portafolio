import React from "react";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contacto"
      className="
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          flex
          flex-col
          items-center
          text-center
          gap-8
        "
      >
        {/* Título */}

        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            text-white
          "
        >
          Contacto
        </h2>

        {/* Texto */}

        <p
          className="
            text-neutral-400
            text-base
            md:text-lg
            max-w-xl
            leading-relaxed
          "
        >
          ¿Tienes un proyecto en mente?
          <br />
          Estoy disponible para colaborar en nuevos proyectos y convertir tus
          ideas en una realidad.
        </p>

        {/* Tarjetas */}

        <div
          className="
            w-full
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            gap-6
          "
        >
          {/* Email */}

          <a
            href="mailto:cristianbarreraavila807@gmail.com"
            className="
              w-full
              max-w-xs
              h-44

              rounded-3xl

              bg-white/[0.04]
              backdrop-blur-xl

              border
              border-white/10

              flex
              flex-col
              justify-center
              items-center

              gap-4

              transition-all
              duration-300

              hover:-translate-y-2
              hover:bg-white/[0.08]
              hover:border-white/20
            "
          >
            <div
              className="
                w-14
                h-14

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center
              "
            >
              <Mail
                size={28}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <span
  className="
    uppercase
    tracking-[0.3em]
    text-xs
    text-neutral-500
  "
>
  Email
</span>

            <span
              className="
                text-white
                text-sm
                font-semibold
                px-4
                text-center
                break-all
              "
            >
              cristianbarreraavila807@gmail.com
            </span>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/573042393675"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              max-w-xs
              h-44

              rounded-3xl

              bg-white/[0.04]
              backdrop-blur-xl

              border
              border-white/10

              flex
              flex-col
              justify-center
              items-center

              gap-4

              transition-all
              duration-300

              hover:-translate-y-2
              hover:bg-white/[0.08]
              hover:border-white/20
            "
          >
            <div
              className="
                w-14
                h-14

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center
              "
            >
              <Phone
                size={28}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <span
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-neutral-500
              "
            >
              WhatsApp
            </span>

            <span
              className="
                text-white
                text-lg
               font-bold
              "
            >
              +57 304 239 3675
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;