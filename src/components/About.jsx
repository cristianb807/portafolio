import React from "react";
import TiltedCard from "../ui/TiltedCard";


function About() {

  const cards = [
    {
      title: "Perfil profesional",
      text: "Desarrollador Web especializado en la construcción de productos interactivos de alto rendimiento.",
      image: "/icono2.png"
    },
    {
      title: "Tecnologías",
      text: "Experiencia trabajando con React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS y APIs REST.",
      image: "/icono2.png"
    },
    {
      title: "Forma de trabajo",
      text: "Desarrollo con componentes reutilizables, buenas prácticas y metodologías ágiles.",
      image: "/icono3.png"
    }
  ];


  return (

    <section
      id="sobre-mi"
      className="
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      px-5
      py-16
      overflow-hidden
      "
    >

      <div
        className="
        w-full
        max-w-5xl
        flex
        flex-col
        items-center
        justify-center
        gap-8
        "
      >

        <h2
          className="
          text-white
          text-4xl
          md:text-5xl
          font-extrabold
          tracking-tight
          text-center
          "
        >
          Sobre mí
        </h2>


        <p
          className="
          max-w-2xl
          text-center
          text-neutral-400
          text-base
          md:text-lg
          leading-relaxed
          "
        >
          Soy Tecnólogo en Desarrollo de Software especializado en desarrollo
          frontend. Me enfoco en crear aplicaciones modernas con interfaces
          intuitivas, código limpio y soluciones digitales escalables.
        </p>


        <div
          className="
          w-full
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          mt-3
          items-stretch
          "
        >

          {cards.map((card,index)=>(

            <div 
              key={index}
              className="
              w-full
              h-[220px]
              "
            >

              <TiltedCard

                imageSrc={card.image}

                altText={card.title}

                captionText={card.title}

                containerHeight="220px"

                containerWidth="100%"

                imageHeight="220px"

                imageWidth="100%"

                rotateAmplitude={8}

                scaleOnHover={1.03}

                showTooltip={false}

                showMobileWarning={false}

                displayOverlayContent={true}

                overlayContent={

                  <div
                    className="
                    w-full
                    h-[220px]
                    rounded-2xl
                    bg-black/40
                    backdrop-blur-sm
                    border
                    border-white/10
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-6
                    "
                  >

                    <h3
                      className="
                      text-white
                      text-lg
                      font-bold
                      mb-3
                      "
                    >
                      {card.title}
                    </h3>


                    <p
                      className="
                      text-neutral-400
                      text-lg
                      leading-8
                      "
                    >
                      {card.text}
                    </p>


                  </div>

                }

              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}


export default About;