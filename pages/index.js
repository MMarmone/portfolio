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
          <main className="flex-grow bg-gray-800 main ">
            <div>
              <Introduction/>
              <AboutMe/>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}
