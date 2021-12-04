import Link from 'next/link'
import { useState, useEffect } from 'react'
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
                <div className={style.projectsHeader} 
                    style={{
                        transform: `translateY(${offset * -0.04}px)`
                    }}>
                    <h5>Nuestros Proyectos</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                </div>
                <div className={style.cardsContainer}>
                    {projects.map(project => (
                        <MiniProjects key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos