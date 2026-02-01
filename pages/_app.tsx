import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Raleway, Roboto } from "next/font/google";
import { Footer } from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${raleway.variable} ${roboto.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
