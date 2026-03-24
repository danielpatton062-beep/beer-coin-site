import Head from "next/head";
import Hero from "../components/Hero";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Community from "../components/Community";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beer Coin Official 🍺</title>
        <meta name="description" content="Drink. Think. BEER Coin." />
      </Head>
      <Hero />
      <Tokenomics />
      <Roadmap />
      <Community />
      <footer className="text-center py-8 border-t border-amber-200 text-amber-700 text-sm">
        © 2026 Beer Coin Official — Made with 🍺 on Solana
      </footer>
    </>
  );
}
