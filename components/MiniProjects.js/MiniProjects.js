import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/MiniProjects.module.css'

const MiniProjects = (props) => {
    return (
        <Link href={'/projects/[id]'} as={`/projects/${props.id}`} passHref>
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
        </Link>

    )
}

export default MiniProjects;