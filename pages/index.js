import Head from 'next/head';
import Layout from '../components/Layout';
import AboutMe from '../components/content/AboutMe';
import Experience from '../components/content/Experience';
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
          <main className="flex-grow dark:bg-gray-800 main ">
            <div>
              <Introduction/>
              <AboutMe/>
              <Experience/>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}
