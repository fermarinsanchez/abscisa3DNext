import Link from 'next/link';
import style from '../styles/CatedralDeToledo.module.css';
import Layout from './layout/layout';

const CathedralPage = () => {
    return (
        <Layout staticElements={false}>
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
            <section className={style.content}>
                <h1>Proyecto Catedral de Toledo</h1>
                <p>Muy pronto tendremos algo nuevo que enseñaros</p>
                <img
                    src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1727291842/Catedral_de_Toledo-escaneado_3d_16_nchmbd.jpg"
                    alt="Imagen de la Catedral de Toledo"
                    className={style.image}
                />
            </section>
        </Layout>
    );
}

export default CathedralPage;
