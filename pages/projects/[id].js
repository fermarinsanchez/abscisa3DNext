import { data } from '../../json_projects/data'
import { useState, useEffect } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Link from 'next/link'
import style from '../../styles/ProjectPage.module.css'
import { useInView, InView } from 'react-intersection-observer';

export const getStaticProps = async ({ params }) => {
    const projects = data.filter(p => p.id.toString() === params.id)
    return {
        props: {
            project: projects[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = data.map(project => ({
        params: { id: project.id.toString() }
    }))
    return { paths, fallback: false }
}

const ProjectPage = ({ project }) => {

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
            <section className={style.section}>
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
                <div className={style.projectHeader}>
                    <div className={style.containerTopHeader}>
                    <h5 className={style.topHeader} style={{ transform: `translateY(${offset * -0.5}px)` }}>
                        {project.name}
                    </h5> 
                    </div>
                    <div className={style.imgDest}>
                        <img src={project.imgDest} alt={project.alt} className={style.imgDestView} style={{ transform: `translateY(${offset * -0.1}px)` }} />
                        <img src={project.imgDest} alt={project.alt} className={style.imgDestShadow} />
                    </div>
                </div>
                <div className={style.pTitle} >
                    <h5>{project.title}</h5>
                </div>
                <div className={style.projectDescription}>
                    {project.description.map((elem, index) => {
                        return <p key={index}>{elem}</p>
                    })}
                </div>
                <div className={style.dataAndGallery}>
                    <div className={style.containerData} >
                        <table>
                            <tbody>
                                <tr>
                                    <td><p>Localización:</p></td>
                                    <td><p>{project.location}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Año:</p></td>
                                    <td><p>{project.year}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Tecnologías:</p></td>
                                    <td>
                                        {project.technologies.map((tech, index) =>
                                            <p key={index}>{tech}</p>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Equipo:</p></td>
                                    <td>
                                        {project.team.map((tech, index) =>
                                            <p key={index}>{tech}</p>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Trabajo:</p></td>
                                    <td>
                                        {project.work.map((tech, index) =>
                                            <p key={index}>{tech}</p>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Entrega:</p></td>
                                    <td>
                                        {project.entrega.map((tech, index) =>
                                            <p key={index}>{tech}</p>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={style.containerPhotos}>
                        <div className={style.gallery}>

                            <SimpleReactLightbox>
                                <SRLWrapper>
                                    <div className={style.galleryGrid}>
                                        <div className={style.photoContainer}>
                                            <img src={project.gallery[1].photo} alt={project.gallery[1].caption} />
                                        </div>
                                        <div className={style.photoContainer}>
                                            <img src={project.gallery[0].photo} alt={project.gallery[0].caption} />
                                        </div>
                                        <div className={style.photoContainer}>

                                            <img src={project.gallery[2].photo} alt={project.gallery[2].caption} />

                                        </div>
                                        {project.video
                                            &&
                                            <div className={style.containerSketchFab}>
                                                <video width="100%" height="auto" controls>
                                                    <source src={project.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        }
                                        {project.sketchFab &&
                                            <div className={style.containerSketchFab} >
                                                <iframe className={style.sketchFab} title="Corral de Comedias de Almagro" frameBorder="0" allowFullScreen mozallowfullscreen={"true"} webkitallowfullscreen={"true"} allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src={project.sketchFab}>
                                                </iframe>
                                            </div>}
                                    </div>
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage;