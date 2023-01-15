import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { ParticlesContainer } from "../components/Particles";
const nunito = Nunito({
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <ParticlesContainer />
      <Component {...pageProps} />
    </main>
  );
}
