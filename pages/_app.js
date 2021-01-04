import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      title="Welcome to AMP"
      description="Learn how to build an AMP First with Next.js."
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
