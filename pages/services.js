/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../styles/Services.module.css'

const Services = () => {
    return (
        <section>
            <div className={styles.servicesContainer}>
                <p className={styles.servicesHeader}>Topografía 3D</p>
                <img src='/images/image-3.jpg' loading="lazy" alt='imagen' />
                <p>
                    Abscisa son grandes profesionales y de una gran confianza que hacer que cada trabajo sea unico.
                </p>
                <p>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p className={styles.servicesHeader}>Diseño en BIM</p>
                <Image
                    src='/images/image-1.jpg'
                    alt='imagen'
                    width={262}
                    height={230}
                    objectFit='cover'
                />
                <p>
                    Abscisa son grandes profesionales y de una gran confianza que hacer que cada trabajo sea unico.
                </p>
                <p>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </section>
    )
}

export default Services