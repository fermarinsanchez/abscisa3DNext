import Link from 'next/link'
import { useInView, InView } from 'react-intersection-observer';
import style from '../../styles/MiniProjects.module.css'

const MiniProjects = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        // triggerOnce: true,
        threshold: 0.5,
        rootMargin: '500px 500px',
    });


    return (
        <>
            <InView >
                <Link href={'/projects/[id]'} as={`/projects/${props.id}`} passHref>
                    <div className={style.card_project} key={props.id}>
                        <h5 className={style.card_project_title}>{props.name}</h5>
                        <p className={style.card_project_year}>{props.year}</p>
                        <div className={style.containerImageProject}>
                            <img src={`${props.img}`} alt={`${props.alt}`} className={style.projImage} />
                        </div>
                    </div>
                </Link>


            </InView>
        </>
    )
}

export default MiniProjects;