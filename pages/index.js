import Head from 'next/head';
import Layout from '../components/Layout';
import AboutMe from '../components/content/AboutMe';
import Experience from '../components/content/Experience';
import Introduction from '../components/content/Introduction';
import ThemeProvider from '../components/theme/ThemeProvider'

export default function Home() {
  return (
    <>
      <Head>
        <title>PORTFOLIO</title>
        <meta
          name="description"
          content="Mon Cv"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap"/>
      </Head>
      <div className='fontserif'>
        <ThemeProvider>
          <Layout>
            <main className="flex-grow dark:bg-gray-800 main">
              <div>
                <Introduction/>
                <AboutMe/>
                <Experience/>
              </div>
            </main>
          </Layout>
        </ThemeProvider>
      </div>
    </>
  );
}
