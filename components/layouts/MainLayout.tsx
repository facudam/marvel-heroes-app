import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface MainLayoutProps {
    children: JSX.Element,
    title: string,
    author: string,
    description: string,
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title, author, description }) => {
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta name="author" content={ author } />
                <meta name="description" content={ description } />
                
            </Head>
            <Navbar />
            {
                children
            }
        </>
    )
}