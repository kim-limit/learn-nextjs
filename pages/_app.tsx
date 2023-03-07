import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Movie</title>
      </Head>
      <Component {...pageProps} />
      <style jsx>{`
        div {
          color: blue;
        }
      `}</style>
    </Layout>
  );
}
