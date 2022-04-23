import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Home.module.css'
import { data } from '../json_projects/data'
import { news } from '../json_projects/news'
import { useInView, InView } from 'react-intersection-observer';
import Cube from '../components/Cube/Cube'
import ScrollButton from '../components/ScrollButton/ScrollButton'

export const getStaticProps = async () => {
  return {
    props: {
      projects: data,
      news: news
    }
  }
}

const Home = ({ projects, news }) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: '-300px 0px',
  });

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  return (
    <>
      <section >
        <div className={style.backgroundVideo}>
          <video autoPlay loop className={style.video} muted playsInline>
            <source src='/videos/abscisa-web.mp4' />
            <source src='/videos/abscisa-web.webm' />
          </video>
          <div className={style.leftBlock}></div>
        </div>
        <div className={style.backgroundHover} ></div>
        <div className={style.backgroundHoverOutSet} style={{ opacity: `${offset * 0.0015}` }}></div>
        <h1 className={style.h1_hidden}>Capturando la realidad</h1>
        <div className={style.headers_mobile}
          style={{
            transform: `translateX(${offset * -0.3}px)`
          }}>
          <div className={style.logo_wrap}>
            <Link href="/">
                <a>
                    <img
                        src='/images/logo-abscisa-vector.svg'
                        alt='abscisa3d logo'
                    />
                </a>
            </Link>
        </div>
          <h1>Capturamos<br />la realidad y la convertimos en 2D, 3D y BIM</h1>
          <Link href='/projects' passHref>
            <div className={style.homeCTA}>
              <p>Ver proyectos</p>
            </div>
          </Link>
        </div>
      </section>
      <ScrollButton/>
      <section className={style.wrapper_testimonials}>
        <div className={style.quotesSection}>
          <InView>
            <img src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1638826543/mobileQuotes_dsh1r2.png' alt='#ABSCISA3D Quotes' style={{ transform: `translateX(${offset * 0.3 +100}px)` }} className={style.quotes} />
            <img src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1638826543/mobileQuotes_dsh1r2.png' alt='#ABSCISA3D Quotes' style={{ transform: `translateY(${offset * 0.2 -200}px)` }} className={style.quotesDesktop} />
            <Link href='/news' passHref>
              <div 
                className={style.container_mas_noticiasDesktop}
                style={{ transform: `translateY(${offset * 0.2 + -200}px)` }}
                >
                <div className={style.container_with_arrow}>
                  <img
                    src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1638914516/buttonQuotes_idgli3.png"
                    alt='mas noticias icon #ABSCISA3d'
                  />
                  <p >Más Noticias</p>
                  <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9041 2.61793L8.99682 0.110804C8.66288 -0.119208 8.48609 0.0187998 8.4468 0.43282V2.22691H0.53038C0.235725 2.22691 0 2.50292 0 2.84794C0 3.21596 0.235725 3.49197 0.53038 3.49197H8.4468V5.42407C8.46644 6.0221 8.66288 6.1141 8.99682 5.88409L11.9041 3.05495C12.022 2.93994 12.0416 2.77894 11.9041 2.61793Z" fill="#05f0d4" />
                  </svg>
                </div>
              </div>
            </Link>
          </InView>
        </div>
        <div className={style.newsContainer}>
         
            <div className={style.container_testimonial}>
              <h4>{news[0].title}</h4>
              <h6 className={style.subTitleTestimonial}>{news[0].font}</h6>
              <p>{news[0].text}</p>
              <a href={news[0].link} target='_blank' className={style.newsAnchor}>
              <p className={style.leerMas}>Leer más<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d'/></span></p>
              </a>
            </div>
            <div className={`${style.container_testimonial} ${style.marginLeft}`}>
              <h4>{news[1].title}</h4>
              <h6 className={style.subTitleTestimonial}>{news[1].font}</h6>
              <p>{news[1].text}</p>
              <a href={news[1].link} target='_blank' className={style.newsAnchor}>
              <p className={style.leerMas}>Leer más<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d'/></span></p>
              </a>
            </div>
            <div className={style.container_testimonial_last}>
              <h4>{news[2].title}</h4>
              <h6 className={style.subTitleTestimonial}>{news[2].font}</h6>
              <p>{news[2].text}</p>
              <a href={news[2].link} target='_blank' className={style.newsAnchor}>
              <p className={style.leerMas}>Leer más<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d'/></span></p>
              </a>
            </div>  
          <Link href='/news' passHref>
            <div className={style.container_mas_noticias}>
              <div className={style.container_with_arrow}>
                <img
                  src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1638914516/buttonQuotes_idgli3.png"
                  alt='mas noticias icon #ABSCISA3d'
                />
                <p >Más Noticias</p>
                <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9041 2.61793L8.99682 0.110804C8.66288 -0.119208 8.48609 0.0187998 8.4468 0.43282V2.22691H0.53038C0.235725 2.22691 0 2.50292 0 2.84794C0 3.21596 0.235725 3.49197 0.53038 3.49197H8.4468V5.42407C8.46644 6.0221 8.66288 6.1141 8.99682 5.88409L11.9041 3.05495C12.022 2.93994 12.0416 2.77894 11.9041 2.61793Z" fill="#05f0d4" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

      </section>
      <section id="nuestros_servicios" className={style.proyectsSectionContainer}>
        <div
          ref={ref}
          className={[style.container_last_projects_text, inView && style.growAnimation].join(" ")}
          style={{ opacity: inView ? 1 : 0 }}
        >
          <h3>Ultimos Proyectos</h3>
        </div>
        <div
          ref={ref}
          className={[style.container_last_projects, inView && style.growAnimation].join(" ")}
          style={{ opacity: inView ? 1 : 0 }}
        >
          <Link href={`/projects/${projects[0].id}`} passHref>
            <div className={style.card_project_1}>
              <h5 className={style.card_project_title}>{projects[0].name}</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <img src={`${projects[0].img}`} alt="card image mocked" className={style.projImage} />
              </div>
            </div>
          </Link>
          <Link href={`/projects/${projects[1].id}`} passHref>
            <div className={style.card_project_2}>
              <h5 className={style.card_project_title}>{projects[1].name}</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <img src={`${projects[1].img}`} alt="card image mocked" className={style.projImage} />
              </div>
            </div>
          </Link>

          <Link href={`/projects/${projects[2].id}`} passHref>
            <div className={style.card_project_3}>
              <h5 className={style.card_project_title}>{projects[2].name}</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <img src={`${projects[2].img}`} alt="card image mocked" className={style.projImage} />

              </div>
            </div>
          </Link>
          <Link href='/projects' passHref>
            <div className={style.container_mas_proyectos}>

              <div className={style.container_with_arrow}>
                <img
                  src='/images/icono_mas_proyectos.png'
                  alt='more projects icon #ABSCISA3d'
                  className={style.projectsIcon}
                />
                <p >Más proyectos</p>
                <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9041 2.61793L8.99682 0.110804C8.66288 -0.119208 8.48609 0.0187998 8.4468 0.43282V2.22691H0.53038C0.235725 2.22691 0 2.50292 0 2.84794C0 3.21596 0.235725 3.49197 0.53038 3.49197H8.4468V5.42407C8.46644 6.0221 8.66288 6.1141 8.99682 5.88409L11.9041 3.05495C12.022 2.93994 12.0416 2.77894 11.9041 2.61793Z" fill="#05f0d4" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section id="equipo">
        <div className={style.container_sobre_nosotros}>
          <div className={style.textAndCube}>
            <div className={style.container_sobre_nosotros}>
              <h3>Sobre #ABSCISA3d</h3>
              <p className={style.sobre_nosotros_text_1} >Somos un estudio especializado en proyectos de nubes de puntos, modelados y BIM.</p>
              <p className={style.sobre_nosotros_text_2}>Capturamos la realidad para transformarla en un entorno digital.</p>
            </div>
            <InView>
              <div className={style.cube}  >
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
  )
}

export default Home
