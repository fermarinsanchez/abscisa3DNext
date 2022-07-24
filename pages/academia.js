import React from 'react'
import Link from 'next/dist/client/link'
import style from '../styles/Academia.module.css'


export default function academia() {
    return (
        <>
            <section>
                <div className={style.logo_wrap}>
                    <Link href="/">
                        <img
                            src='/images/logo-abscisa-vector.svg'
                            alt='abscisa3d logo'
                        />
                    </Link>
                </div>
                <div className={style.generalContainer}>
                    <div>
                        <h3 className={style.topHeader}>
                            Academia
                        </h3>
                    </div>
                    <section className={style.wrapper_testimonials}>
                        <div className={style.cardsContainer}>
                            <div className={style.newsCard}>
                                <div className={style.container_testimonial}>
                                    <img
                                        src='/images/academia_planta_industrial.jpg'
                                        alt='Mapping de planta industrial #ABSCISA3d'
                                        className={style.imgDestCard}
                                    />
                                    <img src='/images/academia_planta_industrial.jpg'
                                        alt='Mapping de planta industrial #ABSCISA3d' className={style.imgDestShadow} />
                                    <h4>FORMACIÓN ON LINE</h4>
                                    <h6>MASTERCLASS Y CURSOS ON LINE</h6>
                                    <p>Los proyectos con nubes de puntos es el presente en los trabajos de hoy, en estas sesiones veremos cómo se escanea, se unifica la nube de puntos y el tratamiento de esta en diversos proyectos.
                                    </p>
                                    <a href='#contacto' className={style.newsAnchor} style={{ textDecoration: 'none' }}>
                                        <p className={style.leerMas}>Contacto<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d' /></span></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={style.wrapper_testimonials}>
                        <div className={style.cardsContainer}>
                            <div className={style.newsCard}>
                                <div className={style.container_testimonial}>
                                    <img
                                        src='/images/academia_scanner_mano.jpg'
                                        alt='scanner y mano #ABSCISA3d'
                                        className={style.imgDestCard}
                                    />
                                     <img src='/images/academia_scanner_mano.jpg'
                                        alt='scanner y mano #ABSCISA3d'className={style.imgDestShadow} />
                                    <h4>FORMACIÓN PRESENCIAL</h4>
                                    <h6>WORKSHOPS, TALLERES Y CURSOS</h6>
                                    <p>Formación personalizada con el contenido que necesitas para manejar la nube de puntos, aprovechando tu tiempo.
                                    </p>
                                    <p>Desde la captura, gestión, procesamiento y manejo de la nube de puntos, nos adaptamos a tus inquietudes para elaborar tus sesiones.
                                    </p>
                                    <a href='#contacto' className={style.newsAnchor} style={{ textDecoration: 'none' }}>
                                        <p className={style.leerMas}>Contacto<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d' /></span></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={style.wrapper_testimonials}>
                        <div className={style.cardsContainer}>
                            <div className={style.newsCard}>
                                <div className={style.container_testimonial}>
                                    <img
                                        src='/images/academia_ordenador.jpg'
                                        alt='scanner y software #ABSCISA3d'
                                        className={style.imgDestCard}
                                    />
                                    <img  src='/images/academia_ordenador.jpg'
                                        alt='scanner y software #ABSCISA3d'
                                        className={style.imgDestShadow} />

                                    <h4>ASESORÍA Y CONSULTORÍA</h4>
                                    <h6>SOPORTE Y ORIENTACIÓN</h6>
                                    <p>Trabajemos juntos  y capturemos la realidad, aprenderás a capturar, procesar y modelar la nube de puntos en el proyecto que tengas en marcha.
                                    </p>
                                    <a href='#contacto' className={style.newsAnchor} style={{ textDecoration: 'none' }}>
                                        <p className={style.leerMas}>Contacto<span><img className={style.chevronRight} src='https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg' alt='chevron right #abscisa3d' /></span></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>
    )
}
