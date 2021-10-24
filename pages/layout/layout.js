import Head from 'next/head'
import Image from 'next/image'
import style from '../layout/layout.module.css'
import Link from 'next/link'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export const siteTitle = 'Abscisa3D'

export default function Layout({ children, staticElements }) {
    return (
        <div>
            <Head>

                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>#ABSCISA3d</title>
            </Head>
            {staticElements && (
                <header>
                    <div className={style.logo_wrap}>
                        <Link href="/">
                            <a>
                                <Image
                                    src='/images/logo-abscisa-vector.svg'
                                    alt='abscisa3d logo'
                                    width={200}
                                    height={100}
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