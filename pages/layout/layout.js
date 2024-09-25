import Head from 'next/head'
import style from '../../styles/layout.module.css'
import Link from 'next/link'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Router from 'next/router'

export const siteTitle = 'Abscisa3D'

export default function Layout({ children, staticElements }) {

    const handleTagName = (tagName) => {
        const tagObJect = {
            "/": "Home",
            "/academia": "Academia",
            "/news": "Noticias",
            "/projects": "Proyectos",
            "/privacy": "Privacidad",
            "/catedral-de-toledo": "Catedral de Toledo",
        }
        return tagObJect[tagName]
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge; chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>{`#ABSCISA3d | ${handleTagName(Router?.router?.asPath)}`}</title>
                <link
                    rel="preload"
                    href="/fonts/Apercu_Regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Apercu_Light.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Apercu_Bold.otf"
                    as="font"
                    crossOrigin=""
                />

            </Head>
            {staticElements && (
                <header>
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
                    <NavBar />
                </header>
            )}
            <main>{children}</main>
            {staticElements && (
                <footer>
                    <Footer />
                </footer>
            )}
        </div>
    )
}