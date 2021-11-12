import Head from 'next/head'
import style from '../../styles/layout.module.css'
import Link from 'next/link'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export const siteTitle = 'Abscisa3D'

export default function Layout({ children, staticElements }) {

    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>

                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>#ABSCISA3d</title>
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