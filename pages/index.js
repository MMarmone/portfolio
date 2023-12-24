import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image'
import AboutMe from '../components/content/AboutMe';

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
          <div className="mt-20 p-10 bg-gray-800 main">
            <div className="text-white h-screen flex justify-center">
              <AboutMe/>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
