import React from 'react'
import Head from 'next/head'
import Header from './Header/Header'

export const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
            <title>PL⚽ CRUD App - {page}</title>
        </Head>

        <Header/>

        {children}
    </div>
  )
}
