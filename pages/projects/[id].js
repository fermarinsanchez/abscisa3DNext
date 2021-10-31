import { data } from '../../json_projects/data'
import Link from 'next/link'
import Image from 'next/image'
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

const ProjectPage = ({ project }) => (
    <>
        <section>
            <p className={style.topHeader}>
                {project.name}
            </p>
            <div className={style.containerPhotos}>
                <div className={style.firstCP}>
                    <Image
                        src={`/${project.img}`}
                        alt={`project.alt`}
                        width={262}
                        height={230}
                        objectFit='cover'
                    />
                </div>
                <div className={style.secondCP}>
                    <Image
                        src={`/${project.img}`}
                        alt={`project.alt`}
                        width={262}
                        height={120}
                        objectFit='cover'
                    />
                </div>
                <div className={style.thirdCP}>
                    <Image
                        src={`/${project.img}`}
                        alt={`project.alt`}
                        width={123}
                        height={120}
                        objectFit='cover'
                    />
                    <Image
                        src={`/${project.img}`}
                        alt={`project.alt`}
                        width={123}
                        height={120}
                        objectFit='cover'
                    />
                </div>
                <div className={style.containerSketchFab}>
                    <div class="sketchfab-embed-wrapper"> <iframe title="Dead Sea Qumran" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bf4bd5df05134faea2c86bc85cb90a3d/embed?ui_theme=dark"  > </iframe> </div>
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

export default ProjectPage;