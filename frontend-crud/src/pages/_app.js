import { useRouter } from 'next/router';
import HomePage from './HomePage';
import EditPage from './EditPage/[id]';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const renderPage = () => {
    switch (router.pathname) {
      case '/EditPage/[id]':
        const { id } = router.query;
        return <EditPage id={id} />;
      case '/':
        return <HomePage />;
      default:
        return <Component {...pageProps} />;
    }    
    }

  return renderPage();
}
