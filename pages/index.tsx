import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Therapy Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="sr-only">City Therapy Collective</h1>
        <section className="h-screen p-6">
          <div className={`${styles.intro} `}>
            <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
              <div className="w-3/5 px-16 py-12">
                <div className="space-y-4">
                  <h2 className="font-sans text-6xl font-extrabold">
                    City Therapy Collective
                  </h2>
                  <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime ipsa nulla sed quis rerum amet natus quas
                    necessitatibus.
                  </p>
                </div>
                <a
                  className="text-current background-transparent uppercase px-8 py-4 text-l font-bold outline border-2 border-current inline-flex rounded-sm hover:-translate-y-1 transform transition duration-200 ease-in-out mt-8"
                  href="#"
                >
                  Get started
                </a>
              </div>
              <div className="shadow-2xl " style={{ fontSize: 0 }}>
                <Image
                  src="/office.webp"
                  alt="An inviting therapist office"
                  height="600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen p-6">
          <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
            <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
              About City Therapy Collective
            </h2>
          </div>
        </section>
        <section className="h-screen p-6">
          <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
            <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
              Who we are
            </h2>
          </div>
        </section>
        <section className="h-screen p-6">
          <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
            <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
              Our process
            </h2>
          </div>
        </section>
        <section className="h-screen p-6">
          <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
            <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
              Connect with us
            </h2>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
