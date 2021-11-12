import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
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
            {/* <Link href={'/projects/[id]'} as={`/projects/${props.id}`} passHref>
                <div key={props.id} className={style.cardItem}>
                    <Image
                        src={`/${props.img}`}
                        alt={`props.alt`}
                        width={300}
                        height={300}
                        objectFit='cover'
                    />
                    <p className={style.cardTitle}>{props.name}</p>
                </div>
            </Link> */}
            <inView >
                <Link href={'/projects/[id]'} as={`/projects/${props.id}`} passHref>
                    <div className={inView ? style.enterCard : style.exitCard}
                        ref={ref}>
                        <div className={style.card_project} key={props.id}>
                            <h5 className={style.card_project_title}>{props.name}</h5>
                            <p className={style.card_project_year}>2020</p>
                            <div className={style.containerImageProject}>
                                <img src={`/${props.img}`} alt="props.alt" />
                            </div>
                        </div>
                    </div>
                </Link>
            </inView>
        </>
    )
}

export default MiniProjects;