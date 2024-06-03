import { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/Home.module.css";
import { data } from "../json_projects/data";
import { news } from "../json_projects/news";
import { useInView, InView } from "react-intersection-observer";
import Cube from "../components/Cube/Cube";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { GalleryProjects } from "../components/GalleryProjects/GalleryProjects";
import Carousel from "../components/Carousel/Carousel";
import { NewsCard } from "../components/NewsCard/NewsCard";
import AcademyCard from "../components/AcademyCard/AcademyCard";

export const getStaticProps = async () => {
  return {
    props: {
      projects: data,
      news: news,
    },
  };
};

const Home = ({ projects, news }) => {
  const newsItems = news.map((elem, index) => {
    return <NewsCard index={index} />;
  });
  console.log(newsItems);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className={style.backgroundVideo}>
          <video autoPlay loop className={style.video} muted playsInline>
            <source src="/videos/abscisa-web.mp4" />
            <source src="/videos/abscisa-web.webm" />
          </video>
          <div className={style.leftBlock}></div>
        </div>
        <div className={style.backgroundHover}></div>
        <div
          className={style.backgroundHoverOutSet}
          style={{ opacity: `${offset * 0.0015}` }}
        ></div>
        <h1 className={style.h1_hidden}>Capturando la realidad</h1>
        <div
          className={style.headers_mobile}
          style={{
            transform: `translateX(${offset * -0.3}px)`,
          }}
        >
          <div className={style.logo_wrap}>
            <Link href="/">
              <a>
                <img
                  src="/images/logo-abscisa-vector.svg"
                  alt="abscisa3d logo"
                />
              </a>
            </Link>
          </div>
          <h1 className={style.hero_title}>
            Capturamos
            <br />
            la realidad y la convertimos en 2D, 3D y BIM
          </h1>
          {/* <Link href='/projects' passHref>
            <div className={style.homeCTA}>
              <p>Ver proyectos</p>
            </div>
          </Link> */}
        </div>
      </section>
      <ScrollButton />
      <section style={{ margin: "0 7vw 0 7vw" }}>
        <GalleryProjects />
      </section>
      <section id="news" style={{ margin: "0 7vw 0 7vw" }}>
        <div className={style.container_news}>
          <div className={style.container_news_title} style={{ marginTop: 72 }}>
            <h3>Noticias</h3>
          </div>
          <div className={style.container_news_content}>
            <Carousel
              slides={Array.from({ length: 5 })}
              options={{ slidesInView: 1 }}
              data={news}
            />
          </div>
        </div>
      </section>
      <section id="Academia" style={{ margin: "0 7vw 0 7vw" }}>
        <div>
          <div className={style.container_news_title} style={{ marginTop: 72 }}>
            <h3>Formación</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 48,
            }}
          >
            <AcademyCard
              src="/images/academia_planta_industrial.jpg"
              title="Masterclass y cursos on line"
              description={[
                "Los proyectos con nubes de puntos es el presente en los trabajos de hoy, en estas sesiones veremos qué se escanea, se unifica la nube de puntos y el tratamiento de esta en varios proyectos.",
              ]}
              targetId="contacto"
              imagePosition={0}
            />
            <AcademyCard
              src="/images/academia_scanner_mano.jpg"
              title="Workshops, talleres y cursos"
              description={[
                "Formación personalizada con el contenido que necesitas para manejar la nube de puntos, aprovechando tu tiempo.",
                "Desde la captura, gestión, procesamiento y manejo de la nube de puntos, nos adaptamos a tus inquietudes para elaborar tus sesiones.",
              ]}
              targetId="contacto"
              imagePosition={1}
            />
            <AcademyCard
              src="/images/academia_ordenador.jpg"
              title="Soporte y orientación"
              subtitle="SOPORTE Y ORIENTACIÓN"
              description={[
                "Trabajemos juntos  y capturemos la realidad, aprenderás a capturar, procesar y modelar la nube de puntos en el proyecto que tengas en marcha.",
              ]}
              targetId="contacto"
              imagePosition={0}
            />
          </div>
        </div>
      </section>

      <section id="equipo">
        <div className={style.container_sobre_nosotros}>
          <div className={style.textAndCube}>
            <div className={style.container_sobre_nosotros}>
              <h3>Sobre #ABSCISA3d</h3>
              <p className={style.sobre_nosotros_text_1}>
                Somos un estudio especializado en proyectos de nubes de puntos,
                modelados y BIM.
              </p>
              <p className={style.sobre_nosotros_text_1}>
                Asesoramos a nuestros clientes para obtener el mejor resultado
                para sus proyectos, desde las diferentes tecnologías de
                obtención de nube de puntos, láser escáner estáticos, autónomos,
                portátil y escáner volador. Así como, utilizamos los mejores
                software para la solución final.
              </p>
              <p className={style.sobre_nosotros_text_2}>
                Capturamos la realidad para transformarla en un entorno digital.
              </p>
            </div>
            <InView className={style.cubeContainer}>
              <div className={style.cube}>
                <Cube />
              </div>
              <div className={style.cubeMobile}>
                <Cube />
              </div>
            </InView>
          </div>
        </div>
        {/* <div className={style.container_equipo}>
          <h3 id='equipo' className={style.teamHeader}>Equipo</h3>
          <div
            className={[style.equipo_cards, inView && style.growAnimation].join(" ")}
            style={{ opacity: inView ? 1 : 0 }}>
            <div className={`${style.card_1}, ${style.container_card_sn}`}>
              <img src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1647198578/samples/paula_vectorial_spbiig.jpg' width={300} height={400} objectFit='cover' alt='Paula Noriega' />
              <h5>Paula Noriega</h5>
              <p>Ingeniera Técnica en Topografía</p>
            </div>
            <div className={style.container_card_sn}>
              <img src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1647198578/samples/paula_vectorial_spbiig.jpg' width={300} height={400} objectFit='cover' alt='Paula Noriega' />
              <h5>Antón Iglesias</h5>
              <p>Consultor BIM</p>
            </div>
            <div className={style.container_card_sn}>
              <img src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1647198578/samples/paula_vectorial_spbiig.jpg' width={300} height={400} objectFit='cover' alt='Paula Noriega' />
              <h5>Héctor Tena</h5>
              <p>Ingeniero en Edificación</p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Home;
