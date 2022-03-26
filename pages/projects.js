import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useInView, InView } from 'react-intersection-observer';
import { data } from '../json_projects/data'
import MiniProjects from '../components/MiniProjects/MiniProjects'
import style from '../styles/Proyectos.module.css'

export const getStaticProps = async () => {
    return {
        props: {
            projects: data
        }
    }
}

const Proyectos = ({ projects }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [offset, setOffset] = useState(0)
    const [position, setPosition] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)

        }
        setPosition(offset * -0.04)

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])






    return (
        <section>
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
            <div className={style.content}>
                <div className={style.cardsContainer} id='projectsContainer'>
                    <div className={style.projectsHeader}>
                        <h1>Nuestros Proyectos</h1>
                        <p>En ABSCISA3d capturamos la realidad y la documentamos según las necesidades de nuestros clientes a los cuales asesoramos gracias a nuestra experiencia.
                            Os presentamos algunos de nuestros proyectos, en los que con la nube de puntos capturada, modelamos en 3d y BIM, delineamos, hacemos inspección y mediciones  con el proyecto, mallado y texturizado de estructuras patrimoniales, y mucho más.
                        </p>
                    </div>
                    <div
                        ref={ref}
                        className={inView && style.growAnimation}
                        style={{ opacity: inView ? 1 : 0 }}
                    >
                        {projects.map(project => (
                            <MiniProjects key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos