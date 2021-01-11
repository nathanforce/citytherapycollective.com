import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Head>
        <title>City Therapy Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <h1 className="sr-only">City Therapy Collective</h1>
        <section className="h-screen p-6 pt-0 flex flex-col">
          <nav className="sticky top-0 flex items-center bg-white gap-8 px-6 py-8 text-lg text-brand-grey font-bold w-full z-40">
            <Link href="/#about-us">Who we are</Link>
            <Link href="/#our-values">Values</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#join">Join</Link>
          </nav>
          <div className={`${styles.intro} flex-grow`}>
            <div className="text-brand-grey flex items-center h-full max-w-screen-xl m-auto">
              <div className="w-3/5 px-16 py-12">
                <div className="space-y-2">
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
                  className="text-current background-transparent uppercase px-8 py-2 text-l font-bold outline border-2 border-current inline-flex rounded-sm hover:-translate-y-1 transform transition duration-200 ease-in-out mt-8"
                  href="#"
                >
                  Get started
                </a>
              </div>
              <div className="shadow-2xl " style={{ fontSize: 0 }}>
                <Image
                  src="/window.jpg"
                  alt="An inviting therapist office"
                  height="600"
                  width="600"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="h-screen p-6">
          <div className="text-brand-grey h-full max-w-screen-xl m-auto flex py-40">
            <div className="w-3/5 px-16 py-12">
              <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
                Who we are
              </h2>
              <div className="space-y-2">
                <span className="text-5xl font-sans text-6xl font-extrabold">
                  A snappy heading about our therapy practice
                </span>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus.
                </p>
              </div>
            </div>
            <div className="w-2/5"></div>
          </div>
        </section>
        <section id="our-values" className="h-screen p-6">
          <div className="text-brand-grey h-full max-w-screen-xl m-auto py-40">
            <div className="flex">
              <div className="px-16 py-12">
                <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
                  What we value
                </h2>
                <div className="space-y-2">
                  <span className="text-5xl font-sans text-6xl font-extrabold">
                    Our approach
                  </span>
                  <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime ipsa nulla sed quis rerum amet natus quas
                    necessitatibus.
                  </p>
                </div>
              </div>
              <div className="p-10 bg-brand-olive text-white w-2/5 self-start transform -translate-y-10">
                <h3 className=" font-sans text-2xl">Sidebar blurb</h3>
                <p className="text-lg text-white text-opacity-90 mt-2">
                  Perfect place for a little tidbit of info about the practice!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus
                </p>
              </div>
            </div>
            <div className="px-16 py-12 grid grid-cols-3 gap-4">
              <div className="">
                <span className="font-sans text-2xl font-extrabold">
                  Core Value
                </span>
                <p className="text-gray-500 text-xl mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus
                  quas necessitatibus.
                </p>
              </div>
              <div className="">
                <span className="font-sans text-2xl font-extrabold">
                  Core Value
                </span>
                <p className="text-gray-500 text-xl mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus
                  quas necessitatibus.
                </p>
              </div>
              <div className="">
                <span className="font-sans text-2xl font-extrabold">
                  Core Value
                </span>
                <p className="text-gray-500 text-xl mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus
                  quas necessitatibus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="h-min-screen p-6 bg-white">
          <div className="text-brand-grey h-full max-w-screen-xl m-auto py-40">
            <div className="w-3/5 px-16 py-12">
              <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
                How we can help
              </h2>
              <div className="space-y-2">
                <span className="text-5xl font-sans text-6xl font-extrabold">
                  Our services
                </span>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime ipsa nulla sed quis rerum amet natus quas
                  necessitatibus.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-4">
                <FeaturedServiceOffering
                  title="Specialty One"
                  description="Occaecat in consectetur nulla anim commodo consectetur ex magna mollit commodo. Incididunt duis nulla anim ea tempor aliquip minim eu adipisicing Lorem magna elit. Pariatur dolor veniam in irure ad proident consequat aliquip ea et qui. Enim elit tempor adipisicing velit non culpa non esse labore nostrud ea magna veniam."
                />
                <FeaturedServiceOffering
                  title="Another One"
                  description="Pariatur aliqua commodo officia ex labore ea in ullamco est eu. Adipisicing eu nulla est ea consectetur labore culpa labore. Exercitation non cillum ea deserunt minim aute qui sint esse est incididunt."
                />
                <FeaturedServiceOffering
                  title="Third Specialty"
                  description="Sunt cillum do officia proident tempor voluptate est. Ullamco ullamco amet cupidatat dolor adipisicing eiusmod reprehenderit ipsum laboris fugiat. Fugiat eiusmod duis quis magna."
                />
                <FeaturedServiceOffering
                  title="Last Specialty"
                  description="Nostrud esse ipsum consectetur qui enim sint Lorem laboris ullamco culpa officia. Labore irure magna consequat ut in veniam laborum qui laborum est incididunt ut quis. Enim Lorem in nisi mollit nostrud. Eiusmod culpa est aliquip elit mollit adipisicing eiusmod commodo."
                />
              </div>
              <div className="w-1/2 space-y-4">
                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Racial Identity
                  </div>
                  <div className="">
                    Voluptate excepteur enim esse reprehenderit consectetur
                    eiusmod duis. Non consequat laboris est in ad in irure
                    cillum. Veniam culpa ex magna ullamco sunt nulla laborum
                    Lorem consectetur qui veniam labore. Culpa laboris dolore
                    consectetur nisi dolore do tempor. Ut labore ullamco aliquip
                    proident deserunt ad sit Lorem. Excepteur culpa laborum
                    minim eiusmod dolore amet nisi quis exercitation aliquip
                    aliqua. Sint pariatur nisi aute occaecat tempor excepteur
                    laborum id Lorem ullamco fugiat laboris.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Relationship Issues
                  </div>
                  <div className="">
                    Quis non in elit labore sint. Aute duis proident ullamco ea
                    deserunt. Nostrud consectetur eu tempor sunt id. Ad ut
                    consectetur exercitation magna do nostrud sit sint labore
                    anim culpa velit officia. Veniam sunt commodo sint dolore id
                    deserunt non dolore. Eu duis officia ea officia dolor.
                    Excepteur non irure elit aliqua irure occaecat anim non ea
                    labore dolore nulla.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Depression
                  </div>
                  <div className="">
                    Aute ad fugiat sit ipsum deserunt exercitation veniam
                    pariatur ad reprehenderit ex commodo eu sunt. Incididunt
                    quis culpa sunt aute irure qui est aute labore minim aliquip
                    aute anim sint. Nostrud excepteur ad deserunt eu pariatur
                    occaecat eu eu.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Addiction
                  </div>
                  <div className="">
                    Sint anim adipisicing consectetur aliquip consequat
                    excepteur. Culpa nisi et adipisicing voluptate dolore
                    eiusmod anim enim non amet. Non ut minim incididunt qui amet
                    ullamco fugiat quis minim. Dolor adipisicing commodo qui
                    commodo non tempor labore. Ea ullamco eu excepteur
                    exercitation nostrud incididunt Lorem irure culpa.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Alcohol Use
                  </div>
                  <div className="">
                    Labore proident aliquip eu non nostrud qui velit excepteur.
                    Velit consectetur anim irure et duis. Enim laborum occaecat
                    non aliqua duis aliquip ex quis aute. Commodo cupidatat enim
                    cillum commodo duis est dolore ex ullamco consequat
                    reprehenderit.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-sans font-extrabold">
                    Anger Management
                  </div>
                  <div className="">
                    Veniam non incididunt culpa reprehenderit ex ipsum sint
                    cupidatat sit in. Ex tempor veniam pariatur deserunt ea
                    consequat ut et dolor cillum esse est adipisicing sunt.
                    Aliqua veniam laboris est consequat ut sint fugiat. Elit
                    excepteur minim adipisicing incididunt veniam consequat.
                    Ipsum sit qui est laborum eiusmod exercitation. Exercitation
                    cillum nulla laborum do esse occaecat id nulla tempor ad
                    dolore. Duis officia excepteur velit proident.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="h-screen p-6">
          <div className="text-brand-grey h-full max-w-screen-xl m-auto py-40">
            <h2 className="text-brand-green font-sans text-sm font-extrabold uppercase tracking-wider">
              Connect with us
            </h2>

            <div className="space-y-2 mb-4">
              <span className="text-5xl font-sans text-6xl font-extrabold">
                Request a consultation
              </span>
              <p className="text-2xl max-w-2xl">
                Answer some questions and we will be in touch to schedule a
                brief phone consultation to learn more about your needs.
              </p>
            </div>
            <RequestConsultationForm />
          </div>
        </section>
      </main>

      <footer className="px-6 py-4 bg-gray-50 text-center text-brand-grey text-sm">
        Copyright City Therapy Collective, {year}
      </footer>
    </div>
  );
}

function RequestConsultationForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="block space-y-6 w-1/2"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" />
        </div>
      </div>
      <div>
        <Label htmlFor="issue">What brings you to therapy?</Label>
        <Textarea
          id="issue"
          rows={10}
          placeholder="I'd like some help with..."
        />
      </div>

      <button
        type="submit"
        className="text-brand-green background-transparent uppercase px-8 py-2 text-l font-bold outline border-2 border-current inline-flex rounded-sm hover:-translate-y-1 transform transition duration-200 ease-in-out"
      >
        Send
      </button>
    </form>
  );
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      {...props}
      className={`border-gray-300 hover:bg-gray-50 transition transition-bg outline-none focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent rounded mt-2 block w-full ${props.className}`}
    />
  );
});

const Label = React.forwardRef<
  HTMLLabelElement,
  React.HTMLProps<HTMLLabelElement>
>(({ type = 'text', ...props }, ref) => {
  return (
    <label
      {...props}
      className={`block font-extrabold uppercase text-xs tracking-wider w-full text-brand-green ${props.className}`}
    />
  );
});

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.HTMLProps<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={`border-gray-300 hover:bg-gray-50 transition transition-bg outline-none focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent rounded mt-2 block w-full resize-none ${props.className}`}
    />
  );
});

interface FeaturedServiceOfferingProps {
  title: string;
  description: string;
  className?: string;
}

function FeaturedServiceOffering(props: FeaturedServiceOfferingProps) {
  return (
    <div {...props} className={`p-8 ${props.className} bg-brand-olive`}>
      <div className="text-2xl text-white font-sans font-extrabold">
        {props.title}
      </div>
      <div className="text-white text-lg text-opacity-90">
        {props.description}
      </div>
    </div>
  );
}
