import Link from 'next/link';
import style from '../styles/CatedralDeToledo.module.css';
import Layout from './layout/layout';
import Separator from '../components/Separator/Separator';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

const CathedralPage = () => {

    return (
        <>
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
                <main className={style.mainContent}>
                    <section className={style.content}>
                        <h1 className={style.title}>Gemelo digital de la Catedral de Toledo, Primada de España</h1>
                        <img
                            src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1727291842/Catedral_de_Toledo-escaneado_3d_16_nchmbd.jpg"
                            alt="Imagen de la Catedral de Toledo"
                            className={style.imageTop}
                        />

                    </section>
                    <section>
                        <h4>Índice</h4>
                        <ol>
                            <li>
                                <a className={style.link} href="#resumen-del-proyecto">
                                    Resumen del Proyecto
                                </a>
                            </li>
                            <li>
                                <a className={style.link} href="#antecedentes-y-justificacion">
                                    Antecedentes y Justificación
                                </a>
                            </li>
                            <li>
                                <a className={style.link} href="#descripcion-tecnica-del-proyecto">
                                    Descripción Técnica del Proyecto
                                </a>
                            </li>
                            <li>
                                <a className={style.link} href="#equipo-y-participantes">
                                    Equipo y Participantes
                                </a>
                            </li>
                            <li>
                                <a className={style.link} href="#impacto-y-beneficios">
                                    Impacto y Beneficios del Proyecto
                                </a>
                            </li>

                        </ol>
                    </section>
                    <Separator />
                    <section id='resumen-del-proyecto'>
                        <img
                            src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1729613070/ABSCISA2024/_EC_0430_3_11zon_r2qngd.jpg"
                            alt="Imagen de la Catedral de Toledo"
                            className={style.image}
                        />
                        <h4>1. Resumen del Proyecto</h4>
                        <p>
                            El Colegio Oficial de Ingeniería Geomática y Topográfica (COIGT) y la empresa ABSCISA3d han unido fuerzas para conmemorar el VIII Centenario del inicio de la construcción de la catedral gótica de Toledo, Primada de España, ofreciendo como regalo a la misma, el escaneo 3d completo y preciso, para la creación de un “gemelo digital” que permitirá preservar digitalmente la arquitectura y el patrimonio cultural y artístico de la Catedral.
                        </p>
                        <p>
                            El proyecto pretende no solo celebrar esta importante efeméride, sino que también pone en valor la importancia de la Ingeniería Geomática y Topográfica en la conservación del patrimonio histórico, demostrando el compromiso de sus profesionales con la sociedad y la cultura.
                        </p>

                    </section>
                    <Separator />
                    <section id='antecedentes-y-justificacion'>
                        <img
                            src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1729613069/ABSCISA2024/_EC_0330_2_11zon_ezcxip.jpg"
                            alt="Imagen de la Catedral de Toledo"
                            className={style.image}
                        />
                        <h4>
                            2. Antecedentes y Justificación
                        </h4>
                        <p>
                            La Catedral de Toledo es una de las construcciones góticas más importantes de España, y con motivo del VIII Centenario de su construcción, por iniciativa de la Delegación Territorial de Castilla-La Mancha del COIGT y con el apoyo de su junta de gobierno, el colegio profesional propuso al Cabildo de la Catedral un proyecto pionero: la creación de un gemelo digital de la catedral mediante el uso de tecnología láser escáner.
                        </p>
                        <p>
                            Este trabajo permitirá documentar cada detalle arquitectónico y artístico y facilitar futuros estudios de conservación, restauración y análisis estructural. Este tipo de levantamiento digital era necesario debido a que los planos existentes se realizaron hace muchos años con métodos menos precisos y además sólo existía uno de la planta baja.
                        </p>

                    </section>
                    <Separator />
                    <section id="descripcion-tecnica-del-proyecto">
                        <img
                            src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1716716204/ABSCISA2024/catedral001.png"
                            alt="Imagen de la Catedral de Toledo"
                            className={style.image}
                        />
                        <h4>
                            3. Descripción Técnica del Proyecto
                        </h4>
                        <p>
                            Un gemelo digital es la copia virtual del edificio, que permite tener la geometría precisa del mismo para predecir las necesidades del mismo. Así como, para el estudio geométrico de todas las partes de la Catedral.
                        </p>
                        <p>
                            La captura de datos de la Catedral de Toledo se está realizando con tecnologías láser de última generación:
                        </p>
                        <p>
                            <strong>El Escáner RTC360 de Leica Geosystems:</strong> Este equipo permite realizar capturas con precisión milimétrica, generando un modelo tridimensional de alta calidad.
                        </p>
                        <p>
                            En algunas zonas se escanearon doblemente con el <strong>Escáner BLK2GO</strong> para comparar resultados con los realizados con el anterior escáner. Este escáner de mano permite capturar imágenes en movimiento.
                        </p>
                        <p>
                            Hasta la fecha, se han completado <strong>1.679 escaneos</strong>, recopilando <strong>68.000 millones de puntos</strong> que proporcionarán una geometría extremadamente precisa del templo. El trabajo de escaneo ha llevado aproximadamente mes y medio y el de cálculo y análisis, dos meses.
                        </p>
                        <p>
                            Se ha escaneado un 99% de la catedral, quedando pendiente de algunos escaneos más de algunas zonas determinadas.
                        </p>
                        <p>
                            Además, cada escaneo ha incluido una fotografía esférica de <strong>360º</strong>, lo que permitirá obtener un inventario visual del patrimonio de la catedral en 2024.

                        </p>

                    </section>
                    <Separator />
                    <section id="equipo-y-participantes">
                        <img
                            src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1716739504/ABSCISA2024/72fee8da-d822-4c1c-9ea8-bf32094fe261.png"
                            alt="Imagen de la Catedral de Toledo"
                            className={style.image}
                        />
                        <h4>4. Equipo y Participantes</h4>
                        <p>
                            El proyecto cuenta con un equipo de dos Ingenieras en Geomática y Topografía.
                        </p>
                        <ul>
                            <li>
                                <strong>Paula Noriega Fernández</strong>, Ingeniera técnica en Topografía, trabaja con nube de puntos de láser escáner desde el año 2005 y pertenece al Comité de Asesoramiento Técnico a disposición de la Sociedad Civil, Administraciones Públicas y el Estado creado en 2021 por el COIGT como experta en láser escáner para la reconstrucción de escenarios ante catástrofes y gestión de emergencias.

                            </li>
                            <li>
                                <p>
                                    <strong>Maite Aranda Gutiérrez</strong>, Secretaria Técnica de la Delegación de Castilla-La Mancha del COIGT.
                                </p>
                            </li>
                        </ul>


                    </section>
                    <Separator />
                    <section id="impacto-y-beneficios">
                        <h4>
                            5. Impacto y Beneficios del Proyecto
                        </h4>
                        <p>
                            Este proyecto tiene un valor incalculable para la conservación y el estudio del patrimonio de la Catedral de Toledo:
                        </p>
                        <ul>
                            <li>
                                El modelo 3D permitirá a arquitectos, conservadores y arqueólogos realizar estudios más detallados y precisos sobre la estructura, materiales y estado actual de la catedral.
                            </li>
                            <li>Se podrán obtener planos 2d, 3d, modelos BIM de las zonas que lo precisen.</li>
                            <li>Se podrán localizar patologías en zonas antes poco visibles o accesibles</li>
                            <li>Se podrá disponer de un inventario de todo lo que forma parte de la Catedral en 2024.</li>
                            <li>En caso de un desastre (ruina, incendio, etc..) se podría reconstruir con total fidelidad.</li>
                        </ul>
                    </section>
                    <Separator />
                    <section>
                        <div>
                            <p><strong>Paula Noriega Fernández, Ingeniera Técnica en Topografía,</strong></p>
                            <a className={style.link} href="https://www.linkedin.com/in/paula-noriega-fernandez-020678/">https://www.linkedin.com/in/paula-noriega-fernandez-020678/</a>
                        </div>
                        <div>
                            <p><strong>Maite Aranda Gutierrez, Ingeniera en Geomática y Topografía, </strong></p>
                            <a className={style.link} href="https://www.linkedin.com/in/maite-aranda-guti%C3%A9rrez-6b391766/">https://www.linkedin.com/in/maite-aranda-guti%C3%A9rrez-6b391766/</a>
                        </div>
                        <div>
                            <p><strong>Paula Noriega Fernández, Ingeniera Técnica en Topografía,</strong></p>
                            <a className={style.link} href="https://www.linkedin.com/in/paula-noriega-fernandez-020678/">https://www.linkedin.com/in/paula-noriega-fernandez-020678/</a>
                        </div>
                        <div>
                            <p><strong>COIGT,</strong></p>
                            <a className={style.link} href="https://www.coigt.com/">https://www.coigt.com/</a>
                        </div>
                        <div>
                            <p><strong>Diseño de láminas: Irene Gracia Aranda,</strong></p>
                            <a className={style.link} href=" https://www.linkedin.com/in/irenegraciaaranda/"> https://www.linkedin.com/in/irenegraciaaranda/</a>
                        </div>
                    </section>
                    <div className={style.bottomLogosWrap}>

                        <div className={style.bottomLogos}>
                            <img className={style.logoAbscisa} src="/images/logo-abscisa-vector.svg" alt="Abscisa3d" />
                        </div>
                        <div className={style.bottomLogos}>
                            <img className={style.logoCatedral} src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1729615877/ABSCISA2024/escudo-catedral-primada_p94e1b.png" alt="Catedral Primada" />
                        </div>
                        <div className={style.bottomLogos}>
                            <img className={style.logoCOIGT} src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1729615877/ABSCISA2024/coigt_1_lacigz.png" alt="COIGT" />
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default CathedralPage;
