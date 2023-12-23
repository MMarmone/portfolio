import Head from 'next/head';
import Layout from '../components/Layout';

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
          <h1 className="mt-20" >
            Hello world!
          </h1>
          <h1 className="" >
            Hello world!
          </h1>
          <h1 className="" >
            Hello world!
          </h1>
        </Layout>
      </div>
    </>
  );
}
