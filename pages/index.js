import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import { data } from '../json_projects/data'

export const getStaticProps = async () => {
  return {
    props: {
      projects: data
    }
  }
}

const Home = ({ projects }) => {

  return (
    <>
      <section >
        <div className={style.backgroundVideo}>
          <video autoPlay loop className={style.video} style={{
            position: 'absolute',
            left: '-60%'
          }} muted playsInline>
            <source src='/videos/abscisa-web.mp4' />
            <source src='/videos/abscisa-web.webm' />
          </video>
          <div className={style.leftBlock}></div>
        </div>
        <div className={style.backgroundHover}></div>
        <h1 className={style.h1_hidden}>Capturando la realidad</h1>
        <div className={style.headers_mobile}>
          <h2>Capturamos la realidad.</h2>
          <h3>Y la convertimos en 2D, 3D y BIM</h3>
        </div>
      </section>
      <section className={style.wrapper_testimonials}>
        <svg data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="none" viewBox="0 0 84 84" style={{ marginBottom: 12 }}
        >
          <g clipPath="url(#clip0)">
            <path fill="#181919" d="M0 0H360V7585H0z" transform="translate(-135 -636)" />
            <path fill="#FFFEED" d="M29 26c-2.174 0-3.793 1.303-5.313 2.906-1.52 1.603-2.955 3.697-4.218 5.969C16.94 39.42 15 44.567 15 48.563v7.312C15 61.395 19.386 66 25 66h7c5.614 0 10-4.605 10-10.125v-6.906C42 43.449 37.572 39 32 39h-3.594c.629-3.47 1.44-6.801 2.5-10.469C31.23 27.356 30.22 26.014 29 26zm33 0c-2.174 0-3.793 1.303-5.313 2.906-1.52 1.603-2.955 3.697-4.218 5.969C49.94 39.42 48 44.567 48 48.563v7.312C48 61.395 52.386 66 58 66h7c5.614 0 10-4.605 10-10.125v-6.906C75 43.449 70.572 39 65 39h-3.594c.629-3.47 1.44-6.801 2.5-10.469C64.23 27.356 63.22 26.014 62 26zm-36.438 7.125c-.612 2.47-1.15 4.926-1.53 7.563-.18 1.135.819 2.308 1.968 2.312h6c3.538 0 6 2.49 6 5.969v6.906C38 59.353 35.496 62 32 62h-7c-3.496 0-6-2.647-6-6.125v-7.313c0-2.505 1.68-7.634 3.969-11.75.818-1.471 1.722-2.576 2.593-3.687zm33 0c-.612 2.47-1.15 4.926-1.53 7.563-.18 1.135.819 2.308 1.968 2.312h6c3.538 0 6 2.49 6 5.969v6.906C71 59.353 68.496 62 65 62h-7c-3.496 0-6-2.647-6-6.125v-7.313c0-2.505 1.68-7.634 3.969-11.75.818-1.471 1.722-2.576 2.593-3.687z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0H360V7585H0z" transform="translate(-135 -636)" />
            </clipPath>
          </defs>
        </svg>
        <div className={style.container_testimonial}>
          <p>Abscisa son grandes profesionales y de una gran confianza que hacer que cada trabajo sea unico.</p>
          <h6>JUAN LÓPEZ</h6>
        </div>
        <div className={style.container_testimonial_right} >
          <p>Abscisa son grandes profesionales y de una gran confianza que hacer que cada trabajo sea unico.</p>
          <h6 className={style.testimonial_author}>JUAN LÓPEZ</h6>
        </div>
        <div className={style.container_testimonial}>
          <p>Abscisa son grandes profesionales y de una gran confianza que hacer que cada trabajo sea unico.</p>
          <h6>JUAN LÓPEZ</h6>
        </div>
        <svg data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" xmlns="http://www.w3.org/2000/svg" width="98" height="62" fill="none" viewBox="0 0 98 62" style={{ marginTop: 5 }}>
          <g clipPath="url(#clip0)">
            <path fill="#181919" d="M0 0H360V7585H0z" transform="translate(-135 -1112)" />
            <path fill="#FFFEED" d="M25 12c-5.613 0-10 4.573-10 10.094V29c0 5.52 4.428 10 10 10h3.594c-.629 3.458-1.443 6.78-2.5 10.438-.347 1.183.673 2.554 1.906 2.562 2.174 0 3.793-1.334 5.313-2.938 1.52-1.602 2.955-3.665 4.218-5.937C40.06 38.58 42 33.401 42 29.406v-7.312C42 16.574 37.614 12 32 12h-7zm33 0c-5.614 0-10 4.573-10 10.094V29c0 5.52 4.428 10 10 10h3.594c-.629 3.458-1.443 6.78-2.5 10.438-.347 1.183.673 2.554 1.906 2.562 2.174 0 3.793-1.334 5.313-2.938 1.52-1.602 2.955-3.665 4.218-5.937C73.06 38.58 75 33.401 75 29.406v-7.312C75 16.574 70.614 12 65 12h-7zm-33 4h7c3.496 0 6 2.616 6 6.094v7.312c0 2.505-1.68 7.635-3.969 11.75-.818 1.472-1.722 2.577-2.593 3.688.612-2.47 1.15-4.926 1.53-7.563.16-1.126-.83-2.274-1.968-2.281h-6c-3.538 0-6-2.522-6-6v-6.906C19 18.615 21.504 16 25 16zm33 0h7c3.496 0 6 2.616 6 6.094v7.312c0 2.505-1.68 7.635-3.969 11.75-.818 1.472-1.722 2.577-2.594 3.688.613-2.47 1.15-4.926 1.532-7.563.16-1.126-.832-2.274-1.969-2.281h-6c-3.538 0-6-2.522-6-6v-6.906C52 18.615 54.504 16 58 16z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0H360V7585H0z" transform="translate(-135 -1112)" />
            </clipPath>
          </defs>
        </svg>
      </section>
      <section id="nuestros_servicios">
        <div className={style.container_our_services}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="125" fill="none" viewBox="0 0 100 125">
              <path fill="#FFFEED" d="M50 13c-3.302 0-6 2.698-6 6 0 2.965 2.165 5.431 5 5.906v13.469l-18.438 9.219c-.17.082-.312.211-.412.372-.1.16-.151.345-.15.534v22.344l-11.938 6.969C16.997 76.132 15.127 75 13 75c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6c0-.448-.062-.892-.156-1.313l12.093-7.062L49.47 83.844c.159.1.343.153.531.153s.372-.053.531-.153l18.532-11.219 12.093 7.063c-.094.42-.156.864-.156 1.312 0 3.302 2.698 6 6 6s6-2.698 6-6-2.698-6-6-6c-2.127 0-3.996 1.132-5.063 2.813L70 70.843V48.5c.001-.189-.05-.374-.15-.534-.1-.16-.243-.29-.412-.372l-13-6.5c-.12-.058-.249-.091-.38-.099-.133-.007-.265.011-.39.055-.124.043-.24.111-.338.199-.099.088-.179.194-.236.313-.058.12-.091.249-.099.38-.007.133.011.265.055.39.043.124.111.24.199.338.088.099.194.179.313.236l11.22 5.625L50 57.844 33.219 48.53l17.218-8.625c.17-.082.313-.211.413-.372.1-.16.151-.345.15-.534V24.906c2.835-.475 5-2.941 5-5.906 0-3.302-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4zM32 50.156l17 9.438V81.25L32 70.937v-20.78zm36 0v20.782L51 81.25V59.594l17-9.438zM13 77c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4zm74 0c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4z" />
            </svg>
          </div>
          <h5 className={style.our_serv_text}>Nuestros Servicios</h5>
        </div>
        <div className={style.container_last_projects_text}>
          <h5>Ultimos Proyectos</h5>
        </div>
        <div className={style.container_last_projects}>
          <Link href={`/projects/${projects[0].id}`} passHref>
            <div className={style.card_project_1}>
              <h5 className={style.card_project_title}>{projects[0].name}</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <img src={`/${projects[0].img}`} alt="card image mocked" />
              </div>
            </div>
          </Link>
          <Link href={`/projects/${projects[1].id}`} passHref>
            <div className={style.card_project_2}>
              <h5 className={style.card_project_title}>Torre Norte</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <img src={`/${projects[1].img}`} alt="card image mocked" />
              </div>
            </div>
          </Link>

          <Link href={`/projects/${projects[2].id}`} passHref>
            <div className={style.card_project_3}>
              <h5 className={style.card_project_title}>Torre Norte</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <Image src="/images/card-mock-image.png" width={500} height={300} alt="card image mocked" />

              </div>
            </div>
          </Link>

          <Link href={`/projects/${projects[3].id}`} passHref>
            <div className={style.card_project_4}>
              <h5 className={style.card_project_title} id="mas_proyectos">Torre Norte</h5>
              <p className={style.card_project_year}>2020</p>
              <div className={style.containerImageProject}>
                <Image src="/images/card-mock-image.png" width={500} height={300} alt="card image mocked" />
              </div>
            </div>
          </Link>

        </div>
        <Link href='/projects' passHref>
          <div className={style.container_mas_proyectos} >
            <svg xmlns="http://www.w3.org/2000/svg" width='34' height='30' viewBox="0 0 32 32"><defs><style>{`.cls-1{fill :#fffeed, fill-rule: evenodd}`}</style></defs><title>Recurso 1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Capa_2-2" data-name="Capa 2"><g id="Capa_1-2-2" data-name="Capa 1-2"><path className="cls-1" fill='#fffeed' d="M0,3A3,3,0,0,1,3,0h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3ZM3,2A1,1,0,0,0,2,3v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z" /><path className="cls-1" fill='#fffeed' d="M0,21a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3H0Zm3-1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1Z" /><path className="cls-1" fill='#fffeed' d="M21,0a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3ZM20,3a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1Z" /><path className="cls-1" fill='#fffeed' d="M18,21a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H21a3,3,0,0,1-3-3h0Zm3-1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1Z" /></g></g></g></g></svg>
            <div className={style.container_with_arrow}>
              <p >Más proyectos</p>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9041 2.61793L8.99682 0.110804C8.66288 -0.119208 8.48609 0.0187998 8.4468 0.43282V2.22691H0.53038C0.235725 2.22691 0 2.50292 0 2.84794C0 3.21596 0.235725 3.49197 0.53038 3.49197H8.4468V5.42407C8.46644 6.0221 8.66288 6.1141 8.99682 5.88409L11.9041 3.05495C12.022 2.93994 12.0416 2.77894 11.9041 2.61793Z" fill="#05F0D4" />
              </svg>
            </div>
          </div>
        </Link>
      </section>
      <section id="equipo">
        <div className={style.container_sobre_nosotros}>
          <h5>Sobre Nosotros</h5>
          <p className={style.sobre_nosotros_text_1} >Abscisa 3D es un estudio multidisciplinar especializado en proyectos de nubes de puntos, modelados tridimensionales y BIM.</p>
          <p className={style.sobre_nosotros_text_2}>Capturamos la realidad mediante láser escáner, drone, cámaras fotográficas y equipos de topografía para luego digitarlizarla y convertirla en planos 2D, modelado 3D o BIM</p>
          <h5 style={{ marginBottom: 0 }} id='equipo'>Equipo</h5>
          <div className={style.equipo_cards}>
            <div className={style.container_card_sn}>
              <Image src='/images/Paulinchi.jpg' width={300} height={600} objectFit='cover' alt='Paula Noriega' />
              <h5>Paula Noriega</h5>
              <p>Paula Noriega</p>
            </div>
            <div className={style.container_card_sn}>
              <Image src='/images/Paulinchi.jpg' width={300} height={600} objectFit='cover' alt='Paula Noriega' />
              <h5>Paula Noriega</h5>
              <p>Paula Noriega</p>
            </div>
            <div className={style.container_card_sn}>
              <Image src='/images/Paulinchi.jpg' width={300} height={600} objectFit='cover' alt='Paula Noriega' />
              <h5>Paula Noriega</h5>
              <p>Paula Noriega</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
