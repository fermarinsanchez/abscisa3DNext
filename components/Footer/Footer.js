import Link from 'next/link'
import style from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={style.containerHeroFooter}>
                <div className={style.heroFooter}>
                    <div className={style.heroFooter}>
                        <p className={style.hero_footer_capturamos}>Capturamos la realidad</p>
                        <p className={style.hero_footer_convertimos}>y la convertimos en 2d, 3D y BIM</p>
                    </div>
                </div>
                <div className={style.footerLinks}>
                    <div className={style.wrapper_contacto} id="contacto">
                        <h5>Contacto</h5>
                        <div className={style.container_contacto}>

                            <a href='mailto:info@abscisa3d.com' target="_blank" rel="noreferrer">
                                <p>info@abscisa3d.com</p>
                            </a>
                        </div>
                        <div className={style.container_contacto}>

                            <a href="tel:+34628209393" target="_blank" rel="noreferrer">
                                <p>+34 628 209 393</p>
                            </a>
                        </div>
                        <div className={style.container_contacto}>

                            <a href='https://wa.me/+34628209393' target='_blank' rel="noreferrer">
                                <p>WhatsApp</p>
                            </a>
                        </div>
                    </div>
                    <div className={style.container_siguenos}>
                        <h5>SÍGUENOS</h5>
                        <a href="https://www.linkedin.com/company/abscisa3d" target="_blank" rel="noreferrer"><p>Linkedin</p></a>
                        <a href='https://www.instagram.com/abscisa3d/' target="_blank" rel="noreferrer"><p>Instagram</p></a>
                        <a href="https://www.youtube.com/channel/UCbOQEkKfbAdPLOaACHXAhQg" target="_blank" rel="noreferrer"><p>Youtube</p></a>
                    </div>
                </div>

                {/* <div className={style.container_paginas}>
                    <h5>PÁGINAS</h5>
                    <Link href="/projects" passHref>
                        <p>Más proyectos</p>
                    </Link>
                    <Link href="/news" passHref>
                        <p>Noticias</p>
                    </Link>
                    <a href="#contacto"><p>Contacto</p></a>
                    <Link href="/privacy" passHref>
                        <p>Política de privacidad</p>
                    </Link>
                </div> */}
                {/* <div style={{ display: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width='34' height='30' viewBox="0 0 32 32"><defs><style>{`.cls-1{fill:#fffeed fillRule:'evenodd';}`}</style></defs><title>Recurso 1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Capa_2-2" data-name="Capa 2"><g id="Capa_1-2-2" data-name="Capa 1-2"><path className="cls-1" d="M0,3A3,3,0,0,1,3,0h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3ZM3,2A1,1,0,0,0,2,3v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z" /><path className="cls-1" d="M0,21a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3H0Zm3-1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1Z" /><path className="cls-1" d="M21,0a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3ZM20,3a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1Z" /><path className="cls-1" d="M18,21a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H21a3,3,0,0,1-3-3h0Zm3-1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1Z" /></g></g></g></g></svg>
                </div> */}

            </div>
            <div className={style.smallText}>
                <small >Sitio web diseñado por <a>Maruxa Moreira</a> y desarrollado por <a>Fernando Marín</a> | &copy; #ABSCISA3d {new Date().getFullYear()}</small>
            </div>
        </div>
    )
}

export default Footer