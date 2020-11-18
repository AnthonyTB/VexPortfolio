import Head from "next/head";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vexian | Home</title>
      </Head>
      <HomeHero />
    </div>
  );
}
