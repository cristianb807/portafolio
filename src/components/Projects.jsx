import TiltedCard from "../ui/TiltedCard";


function Projects() {

  const projects = [
    {
      title: "Catálogo Digital",
      image: "/project1.png",
      link: "https://cristianb807.github.io/catalogo-whatsapp/"
    },
    {
      title: "Reservas Barbería",
      image: "/project2.png",
      link: "https://cristianb807.github.io/barber-web/"
    },
    {
      title: "Gestor de proyectos",
      image: "/project3.png",
      link: "https://cristianb807.github.io/taskflow/"
    }
  ];


  return (

    <section
      id="proyectos"
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
        max-w-6xl

        flex
        flex-col

        items-center

        gap-10
        "
      >


        {/* TITULO */}

        <h2
          className="
          text-white

          text-4xl
          md:text-5xl

          font-black

          tracking-tight

          text-center
          "
        >
          Proyectos
        </h2>



        {/* CARDS */}

        <div
          className="
          flex

          flex-col
          md:flex-row

          justify-center

          items-center

          gap-8
          "
        >

          {
            projects.map((project,index)=>(

              <a
                key={index}

                href={project.link}

                target="_blank"

                rel="noopener noreferrer"

                className="
                transition-transform
                duration-300

                hover:-translate-y-2
                "
              >

                <TiltedCard

                  imageSrc={project.image}

                  altText={project.title}

                  captionText={project.title}


                  containerHeight="260px"

                  containerWidth="240px"


                  imageHeight="240px"

                  imageWidth="240px"


                  rotateAmplitude={10}

                  scaleOnHover={1.04}


                  showTooltip={true}

                  showMobileWarning={false}


                  displayOverlayContent={true}


                  overlayContent={

                    <div
                      className="
                      w-[240px]

                      h-[240px]

                      rounded-xl

                      bg-black/40

                      backdrop-blur-sm

                      border

                      border-white/10

                      flex

                      items-end

                      p-4
                      "
                    >

                      <span
                        className="
                        text-white

                        font-bold

                        text-base

                        drop-shadow-lg
                        "
                      >
                        {project.title}
                      </span>

                    </div>

                  }

                />


              </a>

            ))

          }


        </div>


      </div>


    </section>

  );
}


export default Projects;