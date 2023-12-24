import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image'
import AboutMe from '../components/content/AboutMe';
import Introduction from '../components/content/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>PORTFOLIO</title>
        <meta
          name="description"
          content="Mon Cv"
        />
      </Head>
      <div >
        <Layout>
          <main className="mt-20 p-20 bg-gray-800 main">
            <Introduction/>
            <AboutMe/>
          </main>
        </Layout>
      </div>
    </>
  );
}
