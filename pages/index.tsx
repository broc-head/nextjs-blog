import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/Link'
import Date from '../lib/date'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { ERIC } from '../lib/constants'

export default function Home({ 
  allPostsData 
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <div className=''>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className='pt-3 -mr-4 pl-4 pr-4 md:-mr-16 bg-cam dark:bg-purple'>
          <section className=''>
            <div className='-ml-8 md:-ml-10 text-6xl md:text-8xl'>
              <h1 className='mb-4'>
                {ERIC}
              </h1>
            </div>
              <img
                src="/images/smoke.jpg"
                className='rounded-full'
                height={96}
                width={96}
                alt={ERIC}
              />
            
            <p>Hi, I'm Eric</p>
            <p>
              I'm looking for my first job in web development.{' '}
              <a href="https://www.linkedin.com/in/eric-j-whitehead/">Hire me</a>.
            </p>
          </section>

          <section className=''>
            <h2 className='text-lg'>Blog</h2>
            <ul className='list-none'>
              {allPostsData.map(({ id, date, title }) => (
                <li className='mb-5' key={id}>
                  <Link href={'/posts/'+id}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className='color-gray'>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}