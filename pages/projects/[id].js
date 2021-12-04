import { data } from '../../json_projects/data'
import { useState } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Link from 'next/link'
import style from '../../styles/ProjectPage.module.css'

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

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
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
                <h5 className={style.topHeader}>
                    {project.name}
                </h5>
                <div className={style.containerPhotos}>
                    <div className={style.gallery}>

                        <SimpleReactLightbox>
                            <SRLWrapper>
                                <div className={style.galleryGrid}>
                                    <div className={style.imgRow_1}>
                                        <img src={project.gallery[1].photo} alt={project.gallery[1].caption} />
                                    </div>
                                    <div className={style.imgRow_2}>
                                        <img src={project.gallery[0].photo} alt={project.gallery[0].caption} />
                                    </div>
                                    <div className={style.imgRow_3}>
                                        <div className={style.imgRow_31}>
                                            <img src={project.gallery[2].photo} alt={project.gallery[2].caption} />
                                        </div>
                                        <div className={style.imgRow_32}>
                                            <img src={project.gallery[3].photo} alt={project.gallery[3].caption} />
                                        </div>
                                    </div>
                                </div>
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                   
                </div>
                <div className={style.containerData}>
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
                        </tbody>
                    </table>
                </div>
                <div className={style.projectDescription}>
                    <p>
                        {project.description}
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProjectPage;