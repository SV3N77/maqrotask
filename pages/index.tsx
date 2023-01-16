import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maqro task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll">
        <section className="h-screen w-full snap-start bg-red-200">
          Section 1
        </section>
        <section className="h-screen w-full snap-start bg-blue-200">
          Section 2
        </section>
        <section className="h-screen w-full snap-start bg-green-200">
          Section 3
        </section>
      </main>
    </>
  );
}
