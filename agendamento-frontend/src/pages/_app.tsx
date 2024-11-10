// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/global.css'; // Importa os estilos globais

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
