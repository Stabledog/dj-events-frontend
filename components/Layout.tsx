import Head from "next/head";
import Footer from './Footer';
import styles from '../styles/Layout.module.css'
import Header from "./Header"

interface LayoutProps {
    title: String;
    keywords?: String[];
    description: String;
    children: JSX.Element;
}

export default function Layout({ title, description, children }: LayoutProps) {
    return (
        <div>
            <Head>
                {title}
                <meta name="description" content="{description}" />
            </Head>
            <Header />
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
