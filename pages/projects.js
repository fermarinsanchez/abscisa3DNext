import { data } from '../json_projects/data'
import MiniProjects from '../components/MiniProjects.js/MiniProjects'
import style from '../styles/Proyectos.module.css'

export const getStaticProps = async () => {
    return {
        props: {
            projects: data
        }
    }
}

const Proyectos = ({ projects }) => {
    return (
        <section>
            <div className={style.projectsHeader}>
                <p>Nuestros <br />Proyectos</p>
            </div>
            <div className={style.cardsContainer}>
                {projects.map(project => (
                    <MiniProjects key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Proyectos