import Head from 'next/head'
import Link from 'next/Link'
import Navbar from './navbar'
import Container from './container'


export const siteTitle = 'My Next.js Blog'

export default function Layout({
  children,
  home  
}: { 
  children: React.ReactNode
  home?: boolean  
}) {
    return (
      <div className={`${home ? 'h-screen' : 'h-full'} bg-white dark:bg-black text-black dark:text-white`}>
        <Head>
          <meta name="description" content="the layout description" />
          <meta name="title" content={siteTitle} />
        </Head>

        <Navbar home={home}/>

        <Container>  
          <main className='pt-10 text-justify leading-6'>
            {children}
          </main>
        </Container>
 
      </div>
    )
  }