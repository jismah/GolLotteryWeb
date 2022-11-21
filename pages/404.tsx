import React from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Page404 = () => {
    return (
        <div>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Page Not Found" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Error 404: Not Found
                </h1>
            </main>
        </div>
    )
}

export default Page404