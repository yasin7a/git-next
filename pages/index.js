import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-center d-flex flex-column justify-content-between mx-5">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-white mt-2">
        Welcome to
        <a className="text-primary" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <div className="bg-primary  text-center mt-5">
        <h1 className="text-white p-5 bg-dark">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          necessitatibus!
        </h1>
        <p className="text-white pb-5 pt-5 bg-danger display-3">
          build with bootstrap!
        </p>
      </div>
      <footer className="bg-secondary p-3">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className="text-dark">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
