import Head from 'next/head';
import Layout from '../components/Layout';
import AboutMe from '../components/content/AboutMe';
import Experience from '../components/content/Experience';
import Introduction from '../components/content/Introduction';
import ThemeProvider from '../components/theme/ThemeProvider'
import ContactForm from '../components/content/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michel Marmone Marini portfolio</title>
        <meta
          name="michel marmone marini"
          content="Mon Cv"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap"/>
      </Head>
      <div className='font-serif'>
        <ThemeProvider>
          <Layout>
            <main className="flex-grow dark:bg-gray-800 main">
              <div>
                <Introduction/>
                <AboutMe/>
                <Experience/>
                <ContactForm/>
              </div>
            </main>
          </Layout>
        </ThemeProvider>
      </div>
    </>
  );
}
