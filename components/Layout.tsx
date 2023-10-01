import Head from "next/head";
import {useRouter} from 'next/router'
import Footer from './Footer';
import styles from '@/styles/Layout.module.css'
import Header from "./Header"
import Showcase from "./Showcase"

interface LayoutProps {
    title: String;
    keywords?: String[];
    description: String;
    children: JSX.Element;
}

export default function Layout({ title, description, children }: LayoutProps) {
    const router = useRouter();
    return (
        <div>
            <Head>
                {title}
                <meta name="description" content="{description}" />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
            {children}
            </div>
            <Footer />
        </div>
    );
}


Layout.defaultProps = {
    description:'A sample DJ Events site',
    title: 'DJ Events'
}
