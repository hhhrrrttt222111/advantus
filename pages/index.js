import Head from 'next/head'
import About from '../components/About'
import Landing from '../components/Landing'
import Layout from '../components/layout/layout'
import Products from '../components/Products/Products'
import Purchase from '../components/Purchase'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Advantus Life Sciences</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="With a goal of ensuring a healthier future, we at Advantus life sciences work to provide top quality medicines at affordable prices." />
        <meta property="og:image" content="https://raw.githubusercontent.com/PhantomScript/asset-container/main/Advantus/advantus.png"/>
        <meta property="og:site_name" content="Advantus Life Sciences"/>
        <meta property="og:title" content="Advantus Life Sciences"/>
        <meta property="og:url" content="https://advantus.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="With a goal of ensuring a healthier future, we at Advantus life sciences work to provide top quality medicines at affordable prices."/>
        <meta property="og:image" content="https://raw.githubusercontent.com/PhantomScript/asset-container/main/Advantus/advantus.png"/>
        
        <meta itemProp="name" content="Advantus Life Sciences"/>
        <meta itemProp="url" content="https://advantus.vercel.app/"/>
        <meta itemProp="description" content="With a goal of ensuring a healthier future, we at Advantus life sciences work to provide top quality medicines at affordable prices."/>
        <meta itemProp="thumbnailUrl" content=""/>
        <link rel="image_src" href="https://raw.githubusercontent.com/PhantomScript/asset-container/main/Advantus/advantus.png"/>
        <meta itemProp="image" content="https://raw.githubusercontent.com/PhantomScript/asset-container/main/Advantus/advantus.png"/>
      </Head>

      <Landing />
      <About />
      <Products />
      <Purchase />
      

    </Layout>
  )
}
