import Head from "next/head";

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
            {children}
        </div>
    );
}


Layout.defaultProps = {
    description:'A sample DJ Events site',
    title: 'DJ Events'
}
